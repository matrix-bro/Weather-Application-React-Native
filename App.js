import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import CurrentWeather from "./src/screens/CurrentWeather";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
      {/* <CurrentWeather /> */}
    </NavigationContainer>
  );
}
