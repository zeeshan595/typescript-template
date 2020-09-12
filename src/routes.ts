import { fetchJoke } from "./controllers/fetchJoke";
import { IRoute } from "./models/iRoute";
import cors from "cors";

export const routes: IRoute[] = [
  {
    path: "/",
    handlers: [fetchJoke],
  },
];
