import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export const TitleView = () => {
  return (
    <View style={styles.titleView}>
      <Image style={styles.logo} source={require("../assets/owlBlack.png")} />
      <Text style={styles.titleText}>HEDWIG</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleView: {
    marginBottom: 60,
  },
  titleText: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
});
