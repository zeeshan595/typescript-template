import express from "express";
import { routes } from "./routes";

const app = express();
app.listen(5000, () => console.log("server started"));

routes.forEach((route) => {
  app.get(route.path, ...route.handlers);
});
