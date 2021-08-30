import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TitleView } from "../components/Title";
import { LinearGradient } from "expo-linear-gradient";
import { FAB, TextInput, Text, IconButton } from "react-native-paper";
import email from "react-native-email";
//function to send mail to the develepls
const handleEmail = () => {
  const to = ["nabihamer@hotmail.com", "ashraf.kh99@protonmail.com"]; // string or array of email addresses
  email(to, {
    subject: "contact",
    body: "i need help in ",
  }).catch(console.error);
};
export const AboutUs = () => {
  return (
    <>
      <LinearGradient colors={["#f2f5fa", "#cedef2"]} style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.mainView}>
            <View style={styles.centeredView}>
              <TitleView />
              <Text style={styles.center} onPress={handleEmail}>
                Contact us
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </LinearGradient>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    height: "100%",
  },
  center: {
    justifyContent: "center",
    alignSelf: "center",
  },
  text: {
    justifyContent: "center",
    alignContent: "center",
    width: "90%",
    left: 20,
    height: 100,
    fontSize: 20,
  },
  btnContainer: {
    backgroundColor: "transparent",
    margin: 20,
    padding: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "black",
  },
});
export default AboutUs;
