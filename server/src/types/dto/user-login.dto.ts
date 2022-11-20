import { User } from "../../db/entities/user";

export interface UserLoginDto {
  email: string;
  password: string;
}
