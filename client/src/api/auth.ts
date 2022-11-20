import { User, UserCreationDto, UserLoginDto } from "../types/auth";
import { createHTTPClient } from "./client";
import { API_URL } from "./constants";
const internalApiClient = createHTTPClient({
  baseUrl: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export const loginUser = (dto: UserLoginDto) =>
  internalApiClient.post<User>("/auth/signin", dto);

export const createUser = (dto: UserCreationDto) =>
  internalApiClient.post<User>("/auth/signup", dto);
