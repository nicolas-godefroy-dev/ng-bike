import Constants from "expo-constants"

import { Coordinate } from "./distance"

/**
 * OpenWeather
 * @see https://openweathermap.org/current
 */
const OPEN_WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
const OPEN_WEATHER_API_KEY =
  Constants?.manifest?.extra?.OPEN_WEATHER_API_KEY || ""

export type Atmosphere =
  | "Mist"
  | "Smoke"
  | "Haze"
  | "Dust"
  | "Fog"
  | "Sand"
  | "Dust"
  | "Ash"
  | "Squall"
  | "Tornado"

export type Weather = {
  temp: number
  weather:
    | "Clouds"
    | "Clear"
    | "Snow"
    | "Rain"
    | "Drizzle"
    | "Thunderstorm"
    | Atmosphere
}

/**
 * Describes the capacity and rental availability of a stations.
 */
const getWeather = async (coordinate: Coordinate): Promise<Weather> => {
  const res = await fetch(
    `${OPEN_WEATHER_BASE_URL}?lat=${coordinate.latitude}&lon=${coordinate.longitude}&appid=${OPEN_WEATHER_API_KEY}&units=metric`,
  )
  const data = await res.json()

  const weather: Weather = {
    temp: data.main.temp,
    weather: data.weather[0].main,
  }

  return weather
}

export { getWeather }
