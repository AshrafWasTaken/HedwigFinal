import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { LoginInput } from "../components/LoginInput";
import { PrimaryButton } from "../components/PrimaryButton";
import { TitleView } from "../components/Title";
import { LinearGradient } from "expo-linear-gradient";
import Firebase from "../components/Firebase/config";
import { ErrorView } from "../components/ErrorView";
require("firebase/auth");

export const ForgotPassword = () => {
  const [enteredEmail, setEnteredEmail] = useState("");

  // Error text connotation
  const [errorText, setErrorText] = useState(<ErrorView></ErrorView>);

  // Email syntax validator
  const emailValidate = (checkInput) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(checkInput) === false) return false;
    return true;
  };
  // Email input submitter
  const emailInputHandler = (email) => {
    if (emailValidate(email)) {
      setEnteredEmail(email);
    } else setEnteredEmail("");
  };
  //password reset function via firebase
  const passwordReset = () => {
    if (enteredEmail != "")
      Firebase.auth()
        .sendPasswordResetEmail(enteredEmail)
        .then(async (val) => {
          console.log(enteredEmail);
        })
        .catch((error) => {
          console.log(error);
        });
    else
      setErrorText(
        <ErrorView>incorrect Email please set a valid Email.</ErrorView>
      );
  };
  return (
    <LinearGradient colors={["#f2f5fa", "#cedef2"]} style={styles.container}>
      <View style={styles.mainView}>
        <TitleView />

        <Text style={{ marginVertical: 10 }}>
          Enter your Email for password reset
        </Text>
        <LoginInput
          placeholder="Email"
          source={require("../assets/emailBlack.png")}
          onChangeText={emailInputHandler}
        ></LoginInput>
        {errorText}
        <PrimaryButton onPress={passwordReset}>Reset</PrimaryButton>
      </View>
    </LinearGradient>
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
    alignItems: "center",
  },
});
export default ForgotPassword;
