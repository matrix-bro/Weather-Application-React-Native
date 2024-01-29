import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import Icons from "@expo/vector-icons/Feather";
import City from "../screens/City";

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 18, fontWeight: "bold" },
        headerShown: false,
        tabBarStyle: { backgroundColor: "white", height: 58 },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "black",
      }}
    >
      {/* Current Weather Tab */}
      <Tab.Screen
        name="Current"
        // component={CurrentWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icons
              name="droplet"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>

      {/* Upcoming Weather */}
      <Tab.Screen
        name="Upcoming"
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icons
              name="clock"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      />

      {/* City */}
      <Tab.Screen
        name="City"
        component={City}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icons name="home" size={25} color={focused ? "tomato" : "black"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
