import { Character } from "../types/character";
import { Info } from "../types/info";
import { EXTERNAL_API_URL } from "./constants";

export const getCharacters = async (page = 1): Promise<Info<Character[]>> => {
  return new Promise((res) => {
    const a = fetch(`${EXTERNAL_API_URL}/character/?page=${page}`).then((r) =>
      r.json()
    );
    setTimeout(() => {
      res(a);
    }, 5000);
  });
};
