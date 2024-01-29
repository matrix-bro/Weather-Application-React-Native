import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import Icons from "@expo/vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";

const CurrentWeather = ({ weatherData }) => {
  console.log("Current Weather", weatherData);
  const {
    main: { temp, feels_like, temp_max, temp_min, humidity, pressure },
    weather,
    wind,
    visibility,
  } = weatherData;

  return (
    <SafeAreaView style={tw`h-full bg-sky-300 flex pt-25`}>
      <View style={tw`items-center`}>
        <Icons name="cloud" size={100} />
        <Text style={tw`font-bold text-3xl`}>{temp}°</Text>
        <Text style={tw` text-xl`}>Feels like {feels_like}°</Text>
      </View>
      <View style={tw`flex-row justify-center pt-8`}>
        <Text style={tw` text-xl`}>High: {temp_max}° </Text>
        <Text style={tw` text-xl`}>Low: {temp_min}°</Text>
      </View>
      <View style={tw`items-center pt-8`}>
        <Text style={tw` text-xl capitalize`}>{weather[0].description}</Text>
        <Text style={tw` text-xl`}>You could live in the clouds</Text>
      </View>
      <View style={tw`flex-row pt-8 px-6 gap-4`}>
        <View>
          <Text style={tw` text-lg`}>Wind</Text>
          <Text style={tw` text-lg`}>{wind.speed} mph</Text>
        </View>
        <View>
          <Text style={tw` text-lg`}>Humidity</Text>
          <Text style={tw` text-lg`}>{humidity}%</Text>
        </View>
        <View>
          <Text style={tw` text-lg`}>Visibility</Text>
          <Text style={tw` text-lg`}>{visibility / 1000} km</Text>
          {/* <Text style={tw` text-lg`}>5.7 mi</Text> */}
        </View>
        <View>
          <Text style={tw` text-lg`}>Pressure</Text>
          <Text style={tw` text-lg`}>{(pressure * 0.02953).toFixed(2)} in</Text>
          {/* <Text style={tw` text-lg`}>29.99 in</Text> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CurrentWeather;
