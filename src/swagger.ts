import { Express } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import * as swaggerUi from "swagger-ui-express";

export const initSwagger = (app: Express) => {
  const options: swaggerJsdoc.Options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Weather API ",
        version: "1.0.0",
      },
      servers: [
        {
          url: "http://localhost:5001",
        },
      ],
    },
    apis: ["**/*.ts"], // Шлях до ваших маршрутів (можливо знадобиться адаптація відповідно до вашої структури проекту)
  };

  const specs = swaggerJsdoc(options);
  app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));
};
