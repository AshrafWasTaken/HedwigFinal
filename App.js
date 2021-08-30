import React, { useState, useEffect, createContext, useContext } from "react";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import LoadingScreen from "./screens/LoadingScreen";
import { ForgotPassword } from "./screens/ForgotPassword";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Firebase from "./components/Firebase/config";
import { MainAppContainer } from "./screens/MainAppContainer";
require("firebase/auth");
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);
// Checks if firebase is not initialized (Initializes it if it isn't)

// Stack navigator initialization
const Stack = createStackNavigator();

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
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: true, headerTitle: "" }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: true, headerTitle: "" }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: true, headerTitle: "" }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ headerShown: true, headerTitle: "" }}
          />
          <Stack.Screen name="Loading" component={LoadingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return <MainAppContainer />;
}
