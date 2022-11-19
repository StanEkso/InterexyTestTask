import { Request, Response } from "express";
import { UserLoginDto } from "./dto/user-login.dto";
import { userService } from "../services/user.service";
import { UserCreateDto } from "./dto/user-create.dto";
import { jwtService } from "../services/jwt.service";
class AuthController {
  async loginUser(
    req: Request<{}, { accessToken: string }, UserLoginDto>,
    res: Response
  ) {
    const dto = req.body;
    try {
      const { password, ...user } = await userService.loginUser(dto);
      const accessToken = jwtService.createUserAccessToken(user);
      return res.status(200).json({
        ...user,
        accessToken,
      });
    } catch (error) {
      res.status(400).json({ message: "Incorrect data" });
    }
  }

  async createUser(
    req: Request<{}, { accessToken: string }, UserCreateDto>,
    res: Response
  ) {
    const dto = req.body;
    try {
      const { password, ...user } = await userService.createUser(dto);
      const accessToken = jwtService.createUserAccessToken(user);
      return res.status(201).json({
        ...user,
        accessToken,
      });
    } catch (error) {
      res.status(400).json({ message: "Incorrect data" });
    }
  }
}

export const authController = new AuthController();
