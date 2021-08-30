import Firebase from "../components/Firebase/config";
require("firebase/auth");
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { ErrorView } from "../components/ErrorView";
import { LoginInput } from "../components/LoginInput";
import { PrimaryButton } from "../components/PrimaryButton";
import { TitleView } from "../components/Title";
import { LoadingScreen } from "../screens/LoadingScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen({ navigation }) {
  // All input states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Email syntax validator
  const emailValidate = (checkInput) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(checkInput) === false) return false;
    return true;
  };

  // Email input submitter
  const emailInputHandler = (emailInput) => {
    if (emailValidate(emailInput)) {
      setEmail(emailInput);
    } else setEmail("");
  };

  // Password input submitter
  const passwordInputHandler = (passwordInput) => {
    if (passwordInput.length >= 6) setPassword(passwordInput);
    else setPassword("");
  };

  // Error text connotation
  const [errorText, setErrorText] = useState(<ErrorView></ErrorView>);

  // Error text handler
  const errorTextHandler = (error) => {
    if (error === "empty") {
      setErrorText(
        <ErrorView>Some of the fields are empty or invalid.</ErrorView>
      );
    } else
      setErrorText(
        <ErrorView>One of the credentials you entered is incorrect.</ErrorView>
      );
  };

  // Submittion handler (Checks if the account entered exists)
  const submitHandler = () => {
    if (email == "" || password == "") errorTextHandler("empty");
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        return <LoadingScreen />;
      })
      .catch((error) => {
        console.log(error);
        errorTextHandler("error");
      });
  };

  //State variable for checking if the page is loaded or not
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  });

  if (!loaded) {
    return <LoadingScreen />;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient colors={["#f2f5fa", "#cedef2"]} style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.mainView}>
            <TitleView />
            <Text style={styles.overallText}>
              Please enter your credentials
            </Text>
            <LoginInput
              placeholder="Email"
              source={require("../assets/emailBlack.png")}
              onChangeText={emailInputHandler}
            />
            <LoginInput
              placeholder="Password"
              source={require("../assets/passwordBlack.png")}
              onChangeText={passwordInputHandler}
              maxLength={16}
              secureTextEntry={true}
            />
            {errorText}
            <PrimaryButton onPress={submitHandler}>Log In</PrimaryButton>
          </View>
          <View style={styles.credit}>
            <Text style={styles.creditText}>
              Developed by Nabih Amer & Ashraf Kherbawy.
            </Text>
          </View>
        </ScrollView>
      </LinearGradient>
    </TouchableWithoutFeedback>
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
    margin: 30,
  },
  creditText: {
    fontSize: 10,
    color: "black",
  },
  overallText: {
    alignSelf: "center",
    color: "#000",
    fontWeight: "bold",
    marginBottom: 10,
  },
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40%",
  },
  titleView: {
    marginVertical: 50,
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
