import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Linking,
  Image,
} from "react-native";
import { TitleView } from "../components/Title";
import { LinearGradient } from "expo-linear-gradient";
import email from "react-native-email";
import { PrimaryButton } from "../components/PrimaryButton";

export const ContactUs = () => {
  //function to send mail to the develepls
  const handleEmail = () => {
    const to = ["nabihamer@hotmail.com", "ashraf.kh99@protonmail.com"]; // string or array of email addresses
    email(to, {
      subject: "contact",
      body: "i need help in ",
    }).catch(console.error);
  };
  //function for nabih link in github
  const linkNabihGithub = () => {
    Linking.openURL("https://github.com/nabihamer");
  };
  //function for ashraf link in github
  const linkAshrafGithub = () => {
    Linking.openURL("https://github.com/AshrafWasTaken");
  };
  //function for nabih link in linked
  const linkNabihLinkedin = () => {
    Linking.openURL("https://www.linkedin.com/in/nabih-amer-2706481b8");
  };
  //function for ashraf link in linked
  const linkAshrafLinkedin = () => {
    Linking.openURL("https://linkedin.com/in/ashraf-kherbawy-536a83218");
  };

  return (
    <>
      <LinearGradient colors={["#f2f5fa", "#cedef2"]} style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.mainView}>
            <View style={styles.centeredView}>
              <TitleView />
              <View style={styles.rowContainer}>
                <PrimaryButton onPress={linkAshrafGithub}>
                  <Image source={require("../assets/github.png")} />
                  ashraf github
                </PrimaryButton>
                <PrimaryButton onPress={linkNabihGithub}>
                  <Image source={require("../assets/github.png")} />
                  nabih github
                </PrimaryButton>
              </View>
              <View style={styles.rowContainer}>
                <PrimaryButton onPress={linkAshrafLinkedin}>
                  <Image source={require("../assets/linkin.png")} />
                  ashraf linkedin
                </PrimaryButton>
                <PrimaryButton onPress={linkNabihLinkedin}>
                  <Image source={require("../assets/linkin.png")} />
                  nabih linkedin
                </PrimaryButton>
              </View>
              <View style={styles.center}>
                <PrimaryButton onPress={handleEmail}>
                  <Image source={require("../assets/emailBlackIcon.png")} />
                  Contact us
                </PrimaryButton>
              </View>
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

  button: {
    marginVertical: 10,
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rowContainer: {
    height: "10%",
    flexDirection: "row",
  },
});
export default ContactUs;
