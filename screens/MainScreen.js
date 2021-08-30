import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import invalidDest from "../components/Algorithms/invalidDest";
import coordArr, {
  coordPoints,
} from "../components/Coordinates/UnavailableAreas";
import { LinearGradient } from "expo-linear-gradient";
import MapView, { Marker, Callout, Polygon } from "react-native-maps";
import { LoadingScreen } from "./LoadingScreen";
import { requestPermissionsAsync } from "expo-location";
import * as Location from "expo-location";
import { UnavailableArea1 } from "../components/Coordinates/Polygons";
import { MainMap } from "../components/Map/MainMap";

export const MainScreen = (props) => {
  // On state load refresh
  useEffect(() => {
    setLoaded(true);
  }, []);

  // State variable for checking if the component is loaded
  const [loaded, setLoaded] = useState(null);

  if (loaded) {
    return (
      <LinearGradient colors={["#f2f5fa", "#cedef2"]} style={styles.container}>
        <MainMap />
      </LinearGradient>
    );
  }
  return <LoadingScreen />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
});

export default MainScreen;
