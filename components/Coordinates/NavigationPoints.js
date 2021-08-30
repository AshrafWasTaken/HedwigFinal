import React from "react";
import { View, Text } from "react-native";
import { Marker, Callout } from "react-native-maps";
import { NavigationLines, NavigationCoordinates } from "./NavigationLines";
export const NavigationMarkers = () => {
  return (
    <View>
      <Marker
        coordinate={{
          latitude: NavigationCoordinates.coord1.latitude,
          longitude: NavigationCoordinates.coord1.longitude,
        }}
        pinColor={`#a6b864`}
      >
        <Callout>
          <Text>Coord1</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude: NavigationCoordinates.coord2.latitude,
          longitude: NavigationCoordinates.coord2.longitude,
        }}
        pinColor={`#a6b864`}
      >
        <Callout>
          <Text>Coord2</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude: NavigationCoordinates.coord3.latitude,
          longitude: NavigationCoordinates.coord3.longitude,
        }}
        pinColor={`#a6b864`}
      >
        <Callout>
          <Text>Coord3</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude: NavigationCoordinates.coord4.latitude,
          longitude: NavigationCoordinates.coord4.longitude,
        }}
        pinColor={`#a6b864`}
      >
        <Callout>
          <Text>Coord4</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude: NavigationCoordinates.coord5.latitude,
          longitude: NavigationCoordinates.coord5.longitude,
        }}
        pinColor={`#a6b864`}
      >
        <Callout>
          <Text>Coord5</Text>
        </Callout>
      </Marker>
      <NavigationLines />
    </View>
  );
};
