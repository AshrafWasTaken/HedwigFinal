import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";
import { TitleView } from "../components/Title";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen({ navigation }) {
  return (
    <LinearGradient colors={["#f2f5fa", "#cedef2"]} style={styles.container}>
      <View style={styles.mainView}>
        <TitleView />
        <Text style={styles.mainText}>Welcome to Hedwig!</Text>
        <PrimaryButton onPress={() => navigation.navigate("Login")}>
          Log in
        </PrimaryButton>
        <PrimaryButton onPress={() => navigation.navigate("Register")}>
          Register
        </PrimaryButton>
        <Text
          style={styles.FPText}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          Forgot password?
        </Text>
      </View>
      <View style={styles.credit}>
        <Text style={styles.creditText}>
          Developed by Nabih Amer & Ashraf Kherbawy.
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  credit: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  creditText: {
    fontSize: 10,
    color: "black",
    paddingBottom: 20,
  },
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    alignSelf: "center",
    fontSize: 14,
    color: "black",
    padding: 10,
  },
  FPText: {
    alignSelf: "center",
    fontSize: 12,
    color: "black",
    padding: 5,
  },
  secondText: {
    fontSize: 10,
    color: "black",
  },
});
