import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const PrimaryButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.ButtonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 180,
    backgroundColor: "transparent",
    margin: 10,
    padding: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "black",
  },
  ButtonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
});
