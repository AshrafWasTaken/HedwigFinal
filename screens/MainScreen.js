import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { LoadingScreen } from "./LoadingScreen";
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
