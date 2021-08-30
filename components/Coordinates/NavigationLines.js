import React from "react";
import { View } from "react-native";
import { Marker, Polyline } from "react-native-maps";

export const NavigationLines = () => {
  return (
    <View>
      <Polyline
        lineDashPattern={[0]}
        coordinates={[
          {
            latitude: NavigationCoordinates.coord1.latitude,
            longitude: NavigationCoordinates.coord1.longitude,
          },
          {
            latitude: NavigationCoordinates.coord2.latitude,
            longitude: NavigationCoordinates.coord2.longitude,
          },
        ]}
        strokeWidth={2}
        strokeColor={"rgba(0,0,0,0.5)"}
      />
      <Polyline
        lineDashPattern={[0]}
        coordinates={[
          {
            latitude: NavigationCoordinates.coord2.latitude,
            longitude: NavigationCoordinates.coord2.longitude,
          },
          {
            latitude: NavigationCoordinates.coord3.latitude,
            longitude: NavigationCoordinates.coord3.longitude,
          },
        ]}
        strokeWidth={2}
        strokeColor={"rgba(0,0,0,0.5)"}
      />
      <Polyline
        lineDashPattern={[0]}
        coordinates={[
          {
            latitude: NavigationCoordinates.coord3.latitude,
            longitude: NavigationCoordinates.coord3.longitude,
          },
          {
            latitude: NavigationCoordinates.coord7.latitude,
            longitude: NavigationCoordinates.coord7.longitude,
          },
        ]}
        strokeWidth={2}
        strokeColor={"rgba(0,0,0,0.5)"}
      />
      <Polyline
        lineDashPattern={[0]}
        coordinates={[
          {
            latitude: NavigationCoordinates.coord7.latitude,
            longitude: NavigationCoordinates.coord7.longitude,
          },
          {
            latitude: NavigationCoordinates.coord8.latitude,
            longitude: NavigationCoordinates.coord8.longitude,
          },
        ]}
        strokeWidth={2}
        strokeColor={"rgba(0,0,0,0.5)"}
      />
      <Polyline
        lineDashPattern={[0]}
        coordinates={[
          {
            latitude: NavigationCoordinates.coord8.latitude,
            longitude: NavigationCoordinates.coord8.longitude,
          },
          {
            latitude: NavigationCoordinates.coord5.latitude,
            longitude: NavigationCoordinates.coord5.longitude,
          },
        ]}
        strokeWidth={2}
        strokeColor={"rgba(0,0,0,0.5)"}
      />
      <Polyline
        lineDashPattern={[0]}
        coordinates={[
          {
            latitude: NavigationCoordinates.coord5.latitude,
            longitude: NavigationCoordinates.coord5.longitude,
          },
          {
            latitude: NavigationCoordinates.coord6.latitude,
            longitude: NavigationCoordinates.coord6.longitude,
          },
        ]}
        strokeWidth={2}
        strokeColor={"rgba(0,0,0,0.5)"}
      />
      <Polyline
        lineDashPattern={[0]}
        coordinates={[
          {
            latitude: NavigationCoordinates.coord6.latitude,
            longitude: NavigationCoordinates.coord6.longitude,
          },
          {
            latitude: NavigationCoordinates.coord7.latitude,
            longitude: NavigationCoordinates.coord7.longitude,
          },
        ]}
        strokeWidth={2}
        strokeColor={"rgba(0,0,0,0.5)"}
      />
      <Polyline
        lineDashPattern={[0]}
        coordinates={[
          {
            latitude: NavigationCoordinates.coord6.latitude,
            longitude: NavigationCoordinates.coord6.longitude,
          },
          {
            latitude: NavigationCoordinates.coord4.latitude,
            longitude: NavigationCoordinates.coord4.longitude,
          },
        ]}
        strokeWidth={2}
        strokeColor={"rgba(0,0,0,0.5)"}
      />

      <Polyline
        lineDashPattern={[0]}
        coordinates={[
          {
            latitude: NavigationCoordinates.coord4.latitude,
            longitude: NavigationCoordinates.coord4.longitude,
          },
          {
            latitude: NavigationCoordinates.coord5.latitude,
            longitude: NavigationCoordinates.coord5.longitude,
          },
        ]}
        strokeWidth={2}
        strokeColor={"rgba(0,0,0,0.5)"}
      />
      <Polyline
        lineDashPattern={[0]}
        coordinates={[
          {
            latitude: NavigationCoordinates.coord4.latitude,
            longitude: NavigationCoordinates.coord4.longitude,
          },
          {
            latitude: NavigationCoordinates.coord1.latitude,
            longitude: NavigationCoordinates.coord1.longitude,
          },
        ]}
        strokeWidth={2}
        strokeColor={"rgba(0,0,0,0.5)"}
      />
      <Polyline
        lineDashPattern={[0]}
        coordinates={[
          {
            latitude: NavigationCoordinates.coord4.latitude,
            longitude: NavigationCoordinates.coord4.longitude,
          },
          {
            latitude: NavigationCoordinates.coord8.latitude,
            longitude: NavigationCoordinates.coord8.longitude,
          },
        ]}
        strokeWidth={2}
        strokeColor={"rgba(0,0,0,0.5)"}
      />
      <Polyline
        lineDashPattern={[0]}
        coordinates={[
          {
            latitude: NavigationCoordinates.coord8.latitude,
            longitude: NavigationCoordinates.coord8.longitude,
          },
          {
            latitude: NavigationCoordinates.coord3.latitude,
            longitude: NavigationCoordinates.coord3.longitude,
          },
        ]}
        strokeWidth={2}
        strokeColor={"rgba(0,0,0,0.5)"}
      />
      <Polyline
        lineDashPattern={[0]}
        coordinates={[
          {
            latitude: NavigationCoordinates.coord6.latitude,
            longitude: NavigationCoordinates.coord6.longitude,
          },
          {
            latitude: NavigationCoordinates.coord1.latitude,
            longitude: NavigationCoordinates.coord1.longitude,
          },
        ]}
        strokeWidth={2}
        strokeColor={"rgba(0,0,0,0.5)"}
      />
      <Polyline
        lineDashPattern={[0]}
        coordinates={[
          {
            latitude: NavigationCoordinates.coord6.latitude,
            longitude: NavigationCoordinates.coord6.longitude,
          },
          {
            latitude: NavigationCoordinates.coord2.latitude,
            longitude: NavigationCoordinates.coord2.longitude,
          },
        ]}
        strokeWidth={2}
        strokeColor={"rgba(0,0,0,0.5)"}
      />
      <Polyline
        lineDashPattern={[0]}
        coordinates={[
          {
            latitude: NavigationCoordinates.coord4.latitude,
            longitude: NavigationCoordinates.coord4.longitude,
          },
          {
            latitude: NavigationCoordinates.coord2.latitude,
            longitude: NavigationCoordinates.coord2.longitude,
          },
        ]}
        strokeWidth={2}
        strokeColor={"rgba(0,0,0,0.5)"}
      />
    </View>
  );
};

export const NavigationCoordinates = {
  coord1: {
    latitude: 32.900546,
    longitude: 35.28535,
  },
  coord2: {
    latitude: 32.904474,
    longitude: 35.29298,
  },
  coord3: {
    latitude: 32.918301,
    longitude: 35.299667,
  },
  coord4: {
    latitude: 32.917998,
    longitude: 35.277182,
  },
  coord5: {
    latitude: 32.91712958879513,
    longitude: 35.288631096482284,
  },
  coord6: {
    latitude: 32.914103386258425,
    longitude: 35.289834067225456,
  },
  coord7: {
    latitude: 32.917583847990095,
    longitude: 35.29446691274643,
  },
  coord8: {
    latitude: 32.92003382408201,
    longitude: 35.292842499911785,
  }, // this is area 1 navigation points
};
export const NavigationCoordinatesInArray = [
  {
    latitude: 32.900546,
    longitude: 35.28535,
  },
  {
    latitude: 32.904474,
    longitude: 35.29298,
  },
  {
    latitude: 32.918301,
    longitude: 35.299667,
  },
  {
    latitude: 32.917998,
    longitude: 35.277182,
  },
  {
    latitude: 32.91712958879513,
    longitude: 35.288631096482284,
  },
  {
    latitude: 32.914103386258425,
    longitude: 35.289834067225456,
  },
  {
    latitude: 32.917583847990095,
    longitude: 35.29446691274643,
  },
  {
    latitude: 32.92003382408201,
    longitude: 35.292842499911785,
  }, // this is area 1 navigation points
];
export const NavPointsConnection = () => {};
