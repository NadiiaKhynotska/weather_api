import axios from "axios";

import { configs } from "../configs";

const weatherApiService = axios.create({ baseURL: configs.WEATHER_APP_API });

export { weatherApiService };
