import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import Icon from "@expo/vector-icons/Feather";

const City = () => {
  return (
    <SafeAreaView style={tw`h-full`}>
      <ImageBackground
        style={tw`h-full`}
        source={{
          uri: "https://images.pexels.com/photos/8300604/pexels-photo-8300604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
      >
        <Text style={tw`text-3xl pt-12 text-center text-gray-700 font-bold`}>
          New York
        </Text>
        <Text style={tw`text-3xl text-center text-gray-700 font-bold`}>US</Text>
        <View style={tw`flex items-center mt-9`}>
          <Icon name="user" size={50} color={"black"} />
          <Text style={tw`text-2xl pt-4 text-gray-800 font-bold`}>
            Population: 8000
          </Text>
        </View>
        <View style={tw`flex-row justify-center gap-x-20 mt-12`}>
          <View style={tw`flex items-center`}>
            <Icon name="sunrise" size={50} color={"black"} />
            <Text style={tw`text-2xl pt-4 text-gray-900 font-bold`}>
              6:00 AM
            </Text>
          </View>
          <View style={tw`flex items-center`}>
            <Icon name="sunset" size={50} color={"black"} />
            <Text style={tw`text-2xl pt-4 text-gray-900 font-bold`}>
              5:30 PM
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default City;
