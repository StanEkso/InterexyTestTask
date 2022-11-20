import { User } from "./db/entities/user";
declare global {
  namespace Express {
    interface Request {
      user: Omit<User, "password"> | null;
    }
  }
}
