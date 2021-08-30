import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { LoginInput } from "../components/LoginInput";
import { TitleView } from "../components/Title";
import { PrimaryButton } from "../components/PrimaryButton";
import { ErrorView } from "../components/ErrorView";
import { LoadingScreen } from "../screens/LoadingScreen";
import { LinearGradient } from "expo-linear-gradient";
import Firebase, { ft } from "../components/Firebase/config";

require("firebase/auth");
export default function RegisterScreen({ navigation }) {
  // All input states
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

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
  // Username input submitter
  const usernameInputHandler = (usernameInput) => {
    if (usernameInput.length < 4) {
      setUsername("");
      return;
    }
    setUsername(usernameInput);
  };
  // Password input handler
  const passwordInputHandler = (passwordInput) => {
    if (passwordInput.length < 6) {
      setPassword("");
      return;
    }
    setPassword(passwordInput);
  };
  // Repeated Password input handler
  const repeatPasswordInputHandler = (repeatPasswordInput) => {
    if (repeatPasswordInput === password) {
      setRepeatPassword(repeatPasswordInput);
    } else setRepeatPassword("");
  };

  // Error text connotation
  const [errorText, setErrorText] = useState(<ErrorView></ErrorView>);
  // Error text handler
  const errorTextHandler = (check) => {
    if (check)
      setErrorText(
        <ErrorView>Some of the fields are empty or invalid.</ErrorView>
      );
    else if (check === "error") {
      setErrorText(<ErrorView>This email is already in use.</ErrorView>);
    } else setErrorText(<ErrorView></ErrorView>);
  };

  //Submittion handler (Checks viability to add the account to firebase)
  const submitHandler = async () => {
    if (
      email == "" ||
      username == "" ||
      password == "" ||
      repeatPassword == ""
    ) {
      errorTextHandler(true);
    } else {
      errorTextHandler(false);
      Firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (res) => {
          ft.collection("users")
            .doc(email)
            .set({
              email: email,
              username: username,
              password: password,
            })
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.log(error);
            });
          await Firebase.auth().currentUser.updateProfile({
            displayName: username,
            photoURL: "",
          });
        })
        .catch((error) => {
          errorTextHandler("error");
          console.log(error);
        });
    }
  };
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
              onChangeText={emailInputHandler}
              source={require("../assets/emailBlack.png")}
              placeholderTextColor="grey"
            />
            <LoginInput
              placeholder="Username"
              maxLength={10}
              onChangeText={usernameInputHandler}
              source={require("../assets/usernameBlack.png")}
            />
            <LoginInput
              placeholder="Password"
              onChangeText={passwordInputHandler}
              source={require("../assets/passwordBlack.png")}
              maxLength={16}
              secureTextEntry={true}
            />
            <LoginInput
              placeholder="Repeat Password"
              onChangeText={repeatPasswordInputHandler}
              source={require("../assets/passwordBlack.png")}
              maxLength={16}
              secureTextEntry={true}
            />
            {errorText}
            <PrimaryButton onPress={submitHandler}>Register</PrimaryButton>
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
    backgroundColor: "#373546",
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
    marginTop: "40%",
  },
  titleView: {
    margin: 40,
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
  overallText: {
    alignSelf: "center",
    color: "#000",
    fontWeight: "bold",
    marginBottom: 10,
  },
});
