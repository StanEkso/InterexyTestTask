import { User, UserCreationDto, UserLoginDto } from "../types/auth";
import { API_URL } from "./constants";

export const loginUser = (dto: UserLoginDto): Promise<User> =>
  fetch(`${API_URL}/auth/signin`, {
    method: "POST",
    body: JSON.stringify(dto),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((r) => {
    if (r.status !== 200) {
      throw new Error("No user with listed data");
    }
    return r.json();
  });

export const createUser = (dto: UserCreationDto): Promise<User> =>
  fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    body: JSON.stringify(dto),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((r) => {
    if (r.status !== 201) {
      throw new Error("");
    }
    return r.json();
  });
