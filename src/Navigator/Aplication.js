import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Appearance,
  Linking,
} from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "../Theme";
import PesananPage from "../Pages/PesananPage";
import EditDataTamu from "../Pages/PesananPage/EditDataTamu";
const Stack = createNativeStackNavigator();
const config = {
  screens: {
    ScreenA: "a",
    ScreenB: {
      path: "b/:message",
      parse: {
        message: (message) => `${message}`,
      },
    },
    ScreenC: "https://reactnative.dev",
  },
};

const Aplication = () => {
  const scheme = useColorScheme();
  const colorSchemes = Appearance.getColorScheme();
  console.log("naon", colorSchemes);
  Appearance.addChangeListener(({ colorScheme }) => {
    console.log("Mode tampilan berubah menjadi:", colorScheme);
  });

  return (
    <NavigationContainer
      theme={colorSchemes === "dark" ? Colors.darkTheme : Colors.lightTheme}
    >
      <Stack.Navigator
        screenOptions={{ headerShown: true }}
        initialRouteName="PesananPage"
      >
        {/* test Booking */}
        <Stack.Screen
          name="PesananPage"
          options={{
            title: "Pesanan",
            headerShown: true,
          }}
          component={PesananPage}
        />
        <Stack.Screen
          name="EditDataTamu"
          options={{
            title: "Tambah Data Tamu",
            headerShown: true,
          }}
          component={EditDataTamu}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Aplication;

const styles = StyleSheet.create({});
