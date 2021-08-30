import React from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
export const LoginInput = (props) => {
  return (
    <View style={styles.view}>
      <Image style={styles.image} {...props} />
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  input: {
    width: 230,
    textAlign: "left",
    color: "black",
    borderBottomWidth: 0.5,
    borderBottomColor: "#cbc6de",
  },
  image: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginTop: 5,
  },
});
