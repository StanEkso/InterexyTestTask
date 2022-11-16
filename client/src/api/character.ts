import { Character } from "../types/character";
import { Info } from "../types/info";
import { EXTERNAL_API_URL } from "./constants";

export const getCharacters = async (page = 1): Promise<Info<Character[]>> => {
  return new Promise((res) => {
    const a = fetch(`${EXTERNAL_API_URL}/character/?page=${page}`).then((r) => {
      if (r.status !== 200) throw new Error("Something went wrong!");
      return r.json();
    });
    setTimeout(() => {
      res(a);
    }, 0);
  });
};

export const getCharacterById = async (id: number): Promise<Character> => {
  return new Promise((res) => {
    const a = fetch(`${EXTERNAL_API_URL}/character/${id}`).then((r) => {
      if (r.status !== 200) throw new Error("Something went wrong!");
      return r.json();
    });
    setTimeout(() => {
      res(a);
    }, 5000);
  });
};
