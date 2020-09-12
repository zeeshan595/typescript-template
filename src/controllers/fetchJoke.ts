import { Response, Request } from "express";
import fetch from "node-fetch";
import { IJoke } from "../models/iJoke";

export const fetchJokeFromApi = async (): Promise<IJoke> => {
  const req = await fetch("http://official-joke-api.appspot.com/random_joke", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const content = await req.json();
  return content as IJoke;
};

export const fetchJoke = async (
  req?: Request,
  res?: Response
): Promise<void> => {
  try {
    const joke = await fetchJokeFromApi();
    res.send(`${joke.setup} ${joke.punchline}`);
  } catch (e) {
    res.status(400);
    res.send("failed to complete request");
  }
};
