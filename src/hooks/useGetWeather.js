import { useEffect, useState } from "react";
import * as Location from "expo-location";

export const useGetWeather = () => {
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const weatherAPI = process.env.EXPO_PUBLIC_WEATHER_API_KEY;
  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherAPI}`
      );

      const data = await res.json();
      setWeather(data);
      //   console.log("Weather Data", data);
    } catch (error) {
      setError("Could not fetch Weather Data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);

      await fetchWeatherData();
    })();
  }, [lat, lon]);

  return [loading, error, weather];
};
