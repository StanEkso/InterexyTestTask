import { User } from "../db/entities/user";
import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_TOKEN_LIFE_TIME } from "../constants/jwt";
class JWTService {
  createUserAccessToken(userPayload: Omit<User, "password">): string {
    const jwtToken = jwt.sign(userPayload, JWT_SECRET, {
      expiresIn: JWT_TOKEN_LIFE_TIME,
    });
    return jwtToken;
  }

  validateUserToken(token: string) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      console.log(decoded);
      return decoded as Omit<User, "password">;
    } catch {
      return null;
    }
  }
}

export const jwtService = new JWTService();
