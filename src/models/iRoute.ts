import { RequestHandler } from "express";

export interface IRoute {
  path: string;
  handlers: RequestHandler[];
}
