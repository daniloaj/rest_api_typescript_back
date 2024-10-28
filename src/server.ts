import express from "express";
import router from "./router";
import db from "./config/db";
import swaggerUi from "swagger-ui-express";
import cors, { CorsOptions } from "cors";
import swaggerSpec, { swaggerUiOptions } from "./config/swagger";
import morgan from "morgan";

async function ConnectDB() {
  try {
    await db.authenticate();
    db.sync();
    // console.log("Conexión exitosa ");
  } catch (error) {
    console.log(error);
    // console.log("hubo un error al conectar a la bd");
  }
}
ConnectDB();

const server = express();
// cors
const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (origin === process.env.FRONT_URL) {
      callback(null, true);
    } else {
      callback(new Error("Error de cors"));
    }
  },
};
server.use(cors(corsOptions));
server.use(express.json());
server.use(morgan("dev"));
server.use("/api/product", router);

// docs
server.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, swaggerUiOptions)
);

export default server;
