import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: "3.0.2",
    tags: [
      {
        name: "Products",
        description: "API operations related to products",
      },
    ],
    info: {
      title: "REST API Node.js / Express / Typescript",
      version: "1.0.0",
      description: "API Docs for Products",
    },
  },
  apis: ["./src/router.ts"],
};
const swaggerSpec = swaggerJSDoc(options);

const swaggerUiOptions: SwaggerUiOptions = {
  customCss: `.topbar-wrapper .link {
    content: url('https://img.pikbest.com/wp/202345/d-d-letter-d-in-this-fire-background_9613789.jpg!w700wp');
    height: 50px;
    width: auto;
  }`,
  customSiteTitle: "Documentación REST API Express / TypeScript",
  customfavIcon:
    "https://img.pikbest.com/wp/202345/d-d-letter-d-in-this-fire-background_9613789.jpg!w700wp",
};

export default swaggerSpec;
export { swaggerUiOptions };
