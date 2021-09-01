import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CustomDrawerContent } from "../components/CustomDrawerContent/CustomDrawerContent";
import History from "../screens/History";
import { ContactUs } from "./ContactUs";
import MainScreen from "./MainScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerHeaderSignOutButton } from "../components/CustomDrawerContent/DrawerHeaderSignOutButton";
const Drawer = createDrawerNavigator();
export const MainAppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        drawerContentOptions={{
          activeBackgroundColor: "#CADBED",
          activeTintColor: "white",
        }}
      >
        <Drawer.Screen
          name="Map"
          component={MainScreen}
          options={{
            headerShown: true,
            headerTitle: "Main Map",
            headerRight: () => <DrawerHeaderSignOutButton />,
            headerRightContainerStyle: {
              padding: 20,
            },
            headerLeftContainerStyle: {
              padding: 10,
            },
            headerTitleContainerStyle: {
              padding: 20,
            },
          }}
        />
        <Drawer.Screen
          name="History"
          component={History}
          options={{
            headerShown: true,
            headerTitle: "History",
            headerRight: () => <DrawerHeaderSignOutButton />,

            headerRightContainerStyle: {
              padding: 20,
            },
            headerLeftContainerStyle: {
              padding: 10,
            },
            headerTitleContainerStyle: {
              padding: 20,
            },
          }}
        />
        <Drawer.Screen
          name="Contact us"
          component={ContactUs}
          options={{
            headerShown: true,
            headerTitle: "Contact us",
            headerRight: () => <DrawerHeaderSignOutButton />,

            headerRightContainerStyle: {
              padding: 20,
            },
            headerLeftContainerStyle: {
              padding: 10,
            },
            headerTitleContainerStyle: {
              padding: 20,
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainAppContainer;
