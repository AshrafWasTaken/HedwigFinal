import React, { useState, useEffect } from "react";
import LoadingScreen from "./screens/LoadingScreen";
import { HomeContainer } from "./screens/HomeContainer";
import Firebase from "./components/Firebase/config";
import { MainAppContainer } from "./screens/MainAppContainer";
require("firebase/auth");
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);

export default function App() {
  // State variables for checking if the app is loaded or if the user is logged in
  const [loaded, setLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  // Checks state variables
  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoaded(true);
    });
  });

  if (!loaded) {
    return <LoadingScreen />;
  }
  if (!currentUser) {
    return <HomeContainer />;
  }
  return <MainAppContainer />;
}
