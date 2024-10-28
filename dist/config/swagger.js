"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerUiOptions = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
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
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
const swaggerUiOptions = {
    customCss: `.topbar-wrapper .link {
    content: url('https://img.pikbest.com/wp/202345/d-d-letter-d-in-this-fire-background_9613789.jpg!w700wp');
    height: 50px;
    width: auto;
  }`,
    customSiteTitle: "Documentación REST API Express / TypeScript",
    customfavIcon: "https://img.pikbest.com/wp/202345/d-d-letter-d-in-this-fire-background_9613789.jpg!w700wp",
};
exports.swaggerUiOptions = swaggerUiOptions;
exports.default = swaggerSpec;
//# sourceMappingURL=swagger.js.map