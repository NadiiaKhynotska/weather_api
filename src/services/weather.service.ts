import { urls } from "../constants";
import { ApiError } from "../errors";
import { IQuery, IResponse } from "../types";
import { weatherApiService } from "./weather.api.service";

class WeatherService {
  public async getCurrentWeatherByCityOrGeo(query: IQuery): Promise<IResponse> {
    try {
      const { data } = await weatherApiService.get(urls.weather.current, {
        params: query.city
          ? { q: query.city }
          : { lat: query.lat, lon: query.lon },
      });

      return data;
    } catch (e) {
      throw new ApiError("Enter city name or reo location", 400);
    }
  }
}

export const weatherService = new WeatherService();
