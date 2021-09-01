import React, { useEffect, useState } from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import { invalidDest } from "../Algorithms/invalidDest";
import { coordPointsV2 } from "../Coordinates/UnavailableAreas";
import MapView, { Marker, Callout, Polyline } from "react-native-maps";
import { LoadingScreen } from "../../screens/LoadingScreen";
import { requestForegroundPermissionsAsync } from "expo-location";
import * as Location from "expo-location";
import { UnavailableArea1 } from "../Coordinates/Polygons";
import { NavigationMarkers } from "../Coordinates/NavigationPoints";
import { calculatePath } from "../Algorithms/CalculatePath";
import ModelContainer from "../DesignComponents/ModelContainer";
import { getPathDistance } from "../Algorithms/getDistance";

export const MainMap = () => {
  //Function to update current latitude and longitude
  const setCurrentLocation = (latitude, longitude) => {
    setCurrentLatitude(latitude);
    setCurrentLongitude(longitude);
  };
  // variable for the distance of the path
  const [pathDistance, setPathDistance] = useState({ distance: 0 });

  // State variable for main array path that the user will choose. (This is from calculatePath component)
  const [arrayPath, setArrayPath] = useState([]);
  // State variables for current latitude and longitude after enabling location
  const [currentLatitude, setCurrentLatitude] = useState(0);
  const [currentLongitude, setCurrentLongitude] = useState(0);
  const currentLocation = {
    // <- This is for sending both of the current lat and long to the path calculation function
    latitude: currentLatitude,
    longitude: currentLongitude,
  };
  // State variables for the future selected destination and destionation marker object
  let changedLatDest = 0;
  let changedLongDest = 0;
  const [destinationLatitude, setDestinationLatitude] =
    useState(changedLatDest);
  const [destinationLongitude, setDestinationLongitude] =
    useState(changedLongDest);
  //funtion to set the destination co
  const setDestinationCoordinates = (destLatitude, destLongitude) => {
    setDestinationLatitude(destLatitude);
    setDestinationLongitude(destLongitude);
  };
  const selectedDestination = {
    // <- This is for sending both of the dest lat and long to the path calculation function
    latitude: destinationLatitude,
    longitude: destinationLongitude,
  };

  // Function to request and enable location from the user
  const getLocation = async () => {
    const { status } = await requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setCurrentLocation(0, 0);
      console.log("PERMISSION NOT GRANTED");
      return;
    }
    let location;
    try {
      location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
        LocationActivityType: Location.ActivityType.OtherNavigation,
        maximumAge: 5000,
        timeout: 15000,
      });
    } catch {
      location = await Location.getLastKnownPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
        LocationActivityType: Location.ActivityType.OtherNavigation,
        maxAge: 5000,
        timeout: 15000,
      });
    }

    setCurrentLocation(location.coords.latitude, location.coords.longitude);
    setDestinationCoordinates(
      location.coords.latitude,
      location.coords.longitude
    );
  };
  const [loaded, setLoaded] = useState(null);
  useEffect(() => {
    getLocation();
    setLoaded(true);
  }, []);

  if (!loaded || currentLatitude == 0 || currentLongitude == 0) {
    return <LoadingScreen />;
  }
  return (
    <>
      <MapView
        style={styles.map}
        loadingEnabled={true}
        loadingIndicatorColor={"blue"}
        initialRegion={{
          latitude: currentLatitude,
          longitude: currentLongitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        onPress={async (event) => {
          try {
            if (
              invalidDest(
                event.nativeEvent.coordinate.latitude,
                event.nativeEvent.coordinate.longitude,
                coordPointsV2.area1Points
              )
            ) {
              console.log("Unavailable area!");
            } else {
              changedLatDest = event.nativeEvent.coordinate.latitude;
              changedLongDest = event.nativeEvent.coordinate.longitude;
              setDestinationCoordinates(changedLatDest, changedLongDest);
              setArrayPath(
                calculatePath(currentLocation, {
                  latitude: changedLatDest,
                  longitude: changedLongDest,
                })
              );
              const tempPathDistance = getPathDistance(arrayPath);
              setPathDistance({
                ...pathDistance,
                distance: tempPathDistance,
              });
              console.log(tempPathDistance);
            }
          } catch (err) {
            console.log(err);
            setDestinationCoordinates(currentLatitude, currentLongitude);
          }
        }}
      >
        <UnavailableArea1></UnavailableArea1>
        <NavigationMarkers></NavigationMarkers>
        <Polyline
          lineDashPattern={[0]}
          coordinates={arrayPath}
          strokeWidth={2}
          strokeColor={"rgba(252, 3, 3,1)"}
        />
        <Marker
          coordinate={{
            latitude: currentLatitude,
            longitude: currentLongitude,
          }}
          title={"User's current location coordinates."}
        >
          <Callout>
            <Text>Your current location</Text>
          </Callout>
        </Marker>
        <Marker
          pinColor={`#7fffd4`}
          coordinate={{
            latitude: destinationLatitude,
            longitude: destinationLongitude,
          }}
          zIndex={-1}
        />
        <Marker
          pinColor={`#7fffd4`}
          coordinate={{
            latitude: destinationLatitude,
            longitude: destinationLongitude,
          }}
        >
          <Callout>
            <Text>Your current location</Text>
          </Callout>
        </Marker>
      </MapView>
      <ModelContainer path={arrayPath} distance={pathDistance.distance} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    width: 200,
    height: 200,
    backgroundColor: "lightgrey",
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
  },
  overallText: {
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  input: {
    width: 120,
    textAlign: "left",
    color: "black",
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
    fontWeight: "bold",
    alignSelf: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  button: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
    height: 50,
    width: 50,
    borderRadius: 5,
    flex: 0.3,
  },
  fab: {
    position: "absolute",
    backgroundColor: "#89a6be",
  },
});
