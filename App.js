import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Topics from "./screens/Topics";
import GK from "./screens/GK";
import Sports from "./screens/Sports";
import Computers from "./screens/Computers";
import VideoGames from "./screens/VideoGames";
import ScienceNature from "./screens/ScienceNature";
import Result from "./screens/Result";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

// npx react-native run-android

export default function App() {
  const Stack = createStackNavigator();

  const globalScreenOptions = {
    headerTintColor: "black",
    headerTitleAlign: "center",
    headerBackground: () => (
      // <LinearGradient
      //   colors={["#e65c00", "#f9d423"]}
      //   style={{ flex: 1 }}
      //   start={[0, 0]}
      //   end={[1, 0]}
      // />
      <LinearGradient
        colors={["#acb6e5", "#86fde8"]}
        style={{ flex: 1 }}
        start={[0, 0]}
        end={[1, 0]}
      />
    ),
  };

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        initialRouteName="Topics"
        screenOptions={globalScreenOptions}
      >
        <Stack.Screen component={Topics} name="Topics" />
        <Stack.Screen component={GK} name="GK" />
        <Stack.Screen component={Sports} name="Sports" />
        <Stack.Screen component={Computers} name="Computers" />
        <Stack.Screen component={VideoGames} name="VideoGames" />
        <Stack.Screen component={ScienceNature} name="ScienceAndNature" />
        <Stack.Screen component={Result} name="Result" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
