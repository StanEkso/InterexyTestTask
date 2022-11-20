import { User } from "../../db/entities/user";

export type AuthResponse = Omit<User, "password"> & {
  accessToken: string;
};
