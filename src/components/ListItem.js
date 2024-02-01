import { Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import Icon from "@expo/vector-icons/Feather";
import moment from "moment";
import { WeatherType } from "../utils/WeatherType";

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props;
  return (
    <View style={tw`bg-indigo-300 rounded-md mb-4 p-4 flex-row items-center`}>
      <View style={tw`pl-10`}>
        <Icon name={WeatherType[condition]?.icon} size={65} />
      </View>
      <View style={tw`pl-10`}>
        <Text style={tw`text-2xl`}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={tw`text-lg`}>{moment(dt_txt).format("h:mm:ss a")}</Text>
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
