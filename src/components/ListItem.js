import { Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import Icon from "@expo/vector-icons/Feather";

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props;
  return (
    <View style={tw`bg-indigo-300 rounded-md mb-4 p-4 flex-row`}>
      <View style={tw`pl-10`}>
        <Icon name="cloud" size={65} />
      </View>
      <View style={tw`pl-10`}>
        <Text style={tw`text-2xl`}>{dt_txt}</Text>
        <Text style={tw`text-xl`}>{condition}</Text>
        <View style={tw`flex-row gap-x-4`}>
          <Text style={tw`text-xl`}>{min}°</Text>
          <Text style={tw`text-xl`}>{max}°</Text>
        </View>
      </View>
    </View>
  );
};

export default ListItem;
