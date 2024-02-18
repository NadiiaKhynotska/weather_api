import express, { NextFunction, Request, Response } from "express";

import { configs } from "./configs";
import { ApiError } from "./errors";
import { weatherRouter } from "./routers";
import { initSwagger } from "./swagger";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication operations
 */
app.use("/weather", weatherRouter);

initSwagger(app);

app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  res.status(status).json({ message: err.message, status: err.status });
});

app.listen(configs.PORT, () => {
  console.log(`App started on PORT: ${configs.PORT}`);
});
