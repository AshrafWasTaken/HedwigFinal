import React from "react";
import { View, Text } from "react-native";
import { Polygon, Marker, Callout } from "react-native-maps";
import coordArr, { coordPoints } from "./UnavailableAreas";

export const UnavailableArea1 = () => {
  return (
    <View>
      <Polygon
        coordinates={coordArr.area1}
        fillColor={"rgba(255,95,80,0.5)"}
      ></Polygon>
      <Marker
        coordinate={{
          latitude: coordPoints.area1Points.firstPoint.latitude,
          longitude: coordPoints.area1Points.firstPoint.longitude,
        }}
        pinColor={`#a6b864`}
      >
        <Callout>
          <Text>Coord5</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude: coordPoints.area1Points.secondPoint.latitude,
          longitude: coordPoints.area1Points.secondPoint.longitude,
        }}
        pinColor={`#a6b864`}
      >
        <Callout>
          <Text>Coord6</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude: coordPoints.area1Points.thirdPoint.latitude,
          longitude: coordPoints.area1Points.thirdPoint.longitude,
        }}
        pinColor={`#a6b864`}
      >
        <Callout>
          <Text>Coord7</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude: coordPoints.area1Points.fourthPoint.latitude,
          longitude: coordPoints.area1Points.fourthPoint.longitude,
        }}
        pinColor={`#a6b864`}
      >
        <Callout>
          <Text>Coord8</Text>
        </Callout>
      </Marker>
    </View>
  );
};
