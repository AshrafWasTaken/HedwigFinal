import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

export const LoadingScreen = () => {
  return (
    <View style={styles.view}>
      <ActivityIndicator size="large" color="#e8be8c" />
      <Text style={{ color: "#cbc6de", fontWeight: "bold", marginVertical: 4 }}>
        Loading
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});

export default LoadingScreen;
