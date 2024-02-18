import { IResponse } from "../types";

export class WeatherPresenter {
  public static weatherToResponse(data: IResponse) {
    const { weather, main, visibility, wind, clouds } = data;
    return {
      data: {
        weather,
        main,
        visibility,
        wind,
        clouds,
      },
    };
  }
}
