import { config } from "dotenv";

config();

export const configs = {
  PORT: process.env.PORT,

  WEATHER_APP_API: process.env.WEATHER_APP_API,
  API_KEY: process.env.API_KEY,
};
