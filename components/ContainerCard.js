import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

export const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
    backgroundColor: "black",
    padding: 20,
    borderRadius: 10,
    width: Dimensions.get("window").width,
    height: "70%",
  },
});

export default Card;
