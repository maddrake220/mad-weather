import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const WeatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "Just don't go outside.",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "Haze",
    subtitle: "Just don't go outside.",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Haze",
    subtitle: "Just don't go outside.",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "Haze",
    subtitle: "Just don't go outside.",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "Haze",
    subtitle: "Just don't go outside.",
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Haze",
    subtitle: "Just don't go outside.",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "Clear",
    subtitle: "Just go outside.",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "Haze",
    subtitle: "Just don't go outside.",
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "Just don't go outside.",
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "Just don't go outside.",
  },
};
const Weather = ({ temp, condition }) => {
  return (
    <LinearGradient
      colors={
        condition ? WeatherOptions[condition].gradient : ["#4DA0B0", "#D39D38"]
      }
      style={Styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={Styles.halfCotainer}>
        <MaterialCommunityIcons
          size={96}
          name={condition ? WeatherOptions[condition].iconName : "weather-hail"}
        />
        <Text style={Styles.temp}>{temp}℃</Text>
      </View>
      <View style={{ ...Styles.halfCotainer, ...Styles.textContainer }}>
        <View>
          <Text style={Styles.title}>{WeatherOptions[condition].title}</Text>
          <Text style={Styles.subtitle}>
            {WeatherOptions[condition].subtitle}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfCotainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
  },
  title: {
    color: "white",
    fontWeight: "300",
    fontSize: 44,
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 23,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});

export default Weather;
