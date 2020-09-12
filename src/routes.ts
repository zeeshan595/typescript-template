import { fetchJoke } from "./controllers/fetchJoke";
import { IRoute } from "./models/iRoute";

export const routes: IRoute[] = [
  {
    path: "/",
    handlers: [fetchJoke],
  },
];
