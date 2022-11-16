import { Character } from "../types/character";
import { Info } from "../types/info";
import { EXTERNAL_API_URL } from "./constants";

export const getCharacters = async (): Promise<Info<Character[]>> => {
  return fetch(`${EXTERNAL_API_URL}/character`).then((r) => r.json());
};
