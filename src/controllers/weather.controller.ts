import { NextFunction, Request, Response } from "express";

import { WeatherPresenter } from "../presenters";
import { weatherService } from "../services";
import { IQuery } from "../types";

class WeatherController {
  public async getCurrentWeatherByCityOrGeo(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const query = req.query as IQuery;
      const data = await weatherService.getCurrentWeatherByCityOrGeo(query);
      res.json(WeatherPresenter.weatherToResponse(data)).status(200);
    } catch (e) {
      next(e);
    }
  }
}

export const weatherController = new WeatherController();
