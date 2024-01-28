import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import { useGetWeather } from "./src/hooks/useGetWeather";

export default function App() {
  const [loading, error, weather] = useGetWeather();

  // console.log("Weather in App", weather);

  return (
    <NavigationContainer>
      <Tabs />
      {/* <CurrentWeather /> */}
    </NavigationContainer>
  );
}
