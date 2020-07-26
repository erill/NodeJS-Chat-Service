import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/index.js";

const createServer = () => {
  const app = express();
  app.use("/", routes);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  return app;
}

export {
  createServer
};
