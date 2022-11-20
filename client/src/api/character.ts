import { Character } from "../types/character";
import { Info } from "../types/info";
import { createHTTPClient } from "./client";
import { EXTERNAL_API_URL } from "./constants";

const externalApiClient = createHTTPClient({
  baseUrl: EXTERNAL_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCharacters = (page = 1) =>
  externalApiClient.get<Info<Character[]>>(`/character?page=${page}`);

export const getCharacterById = (id: number) =>
  externalApiClient.get<Character>(`/character/${id}`);
