import { fetchJokeFromApi } from "../src/controllers/fetchJoke";

describe("fetchJokeFromApi()", () => {
  test("can get a valid joke from an api", async () => {
    const joke = await fetchJokeFromApi();

    //check types
    expect(typeof joke.id).toEqual('number');
    expect(typeof joke.type).toEqual('string');
    expect(typeof joke.setup).toEqual('string');
    expect(typeof joke.punchline).toEqual('string');

    //check values
    expect(joke.id).toBeTruthy();
    expect(joke.type).toBeTruthy();
    expect(joke.setup).toBeTruthy();
    expect(joke.punchline).toBeTruthy();
  });
});
