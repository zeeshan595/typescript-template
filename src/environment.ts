import dotenv from "dotenv";
import { IEnvironment } from "./models/iEnvironment";

dotenv.config();
export const environment = (process.env as unknown) as IEnvironment;
