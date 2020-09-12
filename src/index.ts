import express from "express";
import expressHandlebars from "express-handlebars";
import bodyParser from "body-parser";
import cors from "cors";
import { routes } from "./routes";
import { environment } from "./environment";

//setup express app
const app = express();
app.engine("handlebars", expressHandlebars());

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//setup variables
app.set("json spaces", 2);

//start server
app.listen(environment.PORT, () => console.log("server started"));

//hook up routes
routes.forEach((route) => {
  app.get(route.path, ...route.handlers);
});
