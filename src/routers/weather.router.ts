import { Router } from "express";

import { weatherController } from "../controllers";

const router = Router();

router.get("", weatherController.getCurrentWeatherByCityOrGeo);

export const weatherRouter = router;
