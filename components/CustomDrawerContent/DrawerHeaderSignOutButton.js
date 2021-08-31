import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Firebase from "../Firebase/config";
require("firebase/auth");

export const DrawerHeaderSignOutButton = () => {
  return (
    <View>
      <TouchableOpacity
        style={{
          height: 30,
          width: 60,
          backgroundColor: "transparent",
          borderRadius: 35,
          borderColor: "black",
          borderWidth: 1,
          justifyContent: "center",
          margin: 10,
        }}
        onPress={() => {
          Firebase.auth().signOut();
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 13,
            fontWeight: "bold",
            textAlignVertical: "center",
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};
