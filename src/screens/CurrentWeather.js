import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import Icons from "@expo/vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";

const CurrentWeather = () => {
  return (
    <SafeAreaView style={tw`h-full bg-sky-300 flex pt-25`}>
      <View style={tw`items-center`}>
        <Icons name="cloud" size={100} />
        <Text style={tw`font-bold text-3xl`}>10°</Text>
        <Text style={tw` text-xl`}>Feels like 7°</Text>
      </View>
      <View style={tw`flex-row justify-center pt-8`}>
        <Text style={tw` text-xl`}>High: 9° </Text>
        <Text style={tw` text-xl`}>Low: 5°</Text>
      </View>
      <View style={tw`items-center pt-8`}>
        <Text style={tw` text-xl`}>Broken Clouds</Text>
        <Text style={tw` text-xl`}>You could live in the clouds</Text>
      </View>
      <View style={tw`flex-row pt-8 px-6 gap-8`}>
        <View>
          <Text style={tw` text-lg`}>Wind</Text>
          <Text style={tw` text-lg`}>8 mph</Text>
        </View>
        <View>
          <Text style={tw` text-lg`}>Humidity</Text>
          <Text style={tw` text-lg`}>97%</Text>
        </View>
        <View>
          <Text style={tw` text-lg`}>Visibility</Text>
          <Text style={tw` text-lg`}>5.7 mi</Text>
        </View>
        <View>
          <Text style={tw` text-lg`}>Pressure</Text>
          <Text style={tw` text-lg`}>29.99 in</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CurrentWeather;
