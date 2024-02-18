import { Express } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import * as swaggerUi from "swagger-ui-express";

export const initSwagger = (app: Express) => {
  const options: swaggerJsdoc.Options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Weather API",
        version: "1.0.0",
        description: "API for retrieving weather information",
      },
      servers: [
        {
          url: "http://localhost:5001",
        },
      ],
      tags: [
        {
          name: "Get weather",
          description: "Endpoints related to weather information",
        },
      ],
      paths: {
        "/weather": {
          get: {
            summary: "Get current weather",
            description:
              "Returns current weather by city name or geolocations.",
            tags: ["Get weather"],
            parameters: [
              {
                in: "query",
                name: "city",
                schema: {
                  type: "string",
                },
                required: false,
                description:
                  "The name of the city for which you want to get the current weather.",
                example: "London",
              },
              {
                in: "query",
                name: "lat",
                schema: {
                  type: "number",
                },
                required: false,
                description:
                  "The latitude coordinate of the location for which you want to get the current weather.",
                example: 51.5074,
              },
              {
                in: "query",
                name: "lon",
                schema: {
                  type: "number",
                },
                required: false,
                description:
                  "The longitude coordinate of the location for which you want to get the current weather.",
                example: -0.1278,
              },
            ],
            responses: {
              200: {
                description: "Current weather.",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        data: {
                          type: "object",
                          properties: {
                            weather: {
                              type: "array",
                              items: {
                                type: "object",
                                properties: {
                                  id: {
                                    type: "number",
                                  },
                                  main: {
                                    type: "string",
                                  },
                                  description: {
                                    type: "string",
                                  },
                                  icon: {
                                    type: "string",
                                  },
                                },
                              },
                            },
                            main: {
                              type: "object",
                              properties: {
                                temp: {
                                  type: "number",
                                },
                                feels_like: {
                                  type: "number",
                                },
                                temp_min: {
                                  type: "number",
                                },
                                temp_max: {
                                  type: "number",
                                },
                                pressure: {
                                  type: "number",
                                },
                                humidity: {
                                  type: "number",
                                },
                                sea_level: {
                                  type: "number",
                                },
                                grnd_level: {
                                  type: "number",
                                },
                              },
                            },
                            visibility: {
                              type: "number",
                            },
                            wind: {
                              type: "object",
                              properties: {
                                speed: {
                                  type: "number",
                                },
                                deg: {
                                  type: "number",
                                },
                                gust: {
                                  type: "number",
                                },
                              },
                            },
                            clouds: {
                              type: "object",
                              properties: {
                                all: {
                                  type: "number",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    example: {
                      data: {
                        weather: [
                          {
                            id: 804,
                            main: "Clouds",
                            description: "хмарно",
                            icon: "04n",
                          },
                        ],
                        main: {
                          temp: 1.75,
                          feels_like: -2.62,
                          temp_min: 1.75,
                          temp_max: 1.75,
                          pressure: 1025,
                          humidity: 89,
                          sea_level: 1025,
                          grnd_level: 1012,
                        },
                        visibility: 10000,
                        wind: {
                          speed: 4.81,
                          deg: 212,
                          gust: 9.82,
                        },
                        clouds: {
                          all: 88,
                        },
                      },
                    },
                  },
                },
              },
              404: {
                description: "Enter city name, latitude, or longitude.",
              },
              500: {
                description: "Internal server error.",
              },
            },
          },
        },
      },
    },
    apis: ["**/*.ts"],
  };

  const specs = swaggerJsdoc(options);
  app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));
};
