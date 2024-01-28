import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import { useGetWeather } from "./src/hooks/useGetWeather";
import { ActivityIndicator, View } from "react-native";
import ErrorItem from "./src/components/ErrorItem";
import tw from "twrnc";

export default function App() {
  const [loading, error, weather] = useGetWeather();

  // console.log("Weather in App", weather);
  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs />
        {/* <CurrentWeather /> */}
      </NavigationContainer>
    );
  }

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      {error ? <ErrorItem /> : <ActivityIndicator size={"large"} />}
    </View>
  );
}
