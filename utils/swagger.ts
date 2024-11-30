import swaggerJsdoc from 'swagger-jsdoc'

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API Documentation",
    version: "1.0.0",
    description: "This is the API documentation for the Express app",
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./router/*.ts"],
};

// Initialize swagger-jsdoc
export const swaggerSpec = swaggerJsdoc(options);

