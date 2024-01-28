import React from "react";
import { Text, View } from "react-native";
import Icon from "@expo/vector-icons/Feather";
import tw from "twrnc";

const ErrorItem = () => {
  return (
    <View style={tw`flex justify-center items-center`}>
      <Icon name="frown" size={100} />
      <Text style={tw`text-3xl`}>Sorry something went wrong</Text>
      <Text style={tw`text-3xl`}>Please try again later</Text>
    </View>
  );
};

export default ErrorItem;
