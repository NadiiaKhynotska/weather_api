import { configs } from "../configs";

const baseWeatherUrl = configs.WEATHER_APP_API;
const apiKey = configs.API_KEY;

const forecast = "/forecast";
const weather = "/weather";

const urls = {
  weather: {
    current: `${baseWeatherUrl}${weather}?appid=${apiKey}&units=metric&lang=ua`,
    forecast: `${baseWeatherUrl}${forecast}?appid=${apiKey}&units=metric&lang=ua`,
  },
};

export { urls };
