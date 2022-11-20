import { Request, Response } from "express";
import { UserLoginDto } from "../types/dto/user-login.dto";
import { userService } from "../services/user.service";
import { UserCreateDto } from "../types/dto/user-create.dto";
import { jwtService } from "../services/jwt.service";
import { AuthResponse } from "../types/responses/auth.response";
import { ErrorResponse } from "../types/responses/error.response";
class AuthController {
  async loginUser(req: Request<{}, AuthResponse, UserLoginDto>, res: Response) {
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
    req: Request<{}, AuthResponse, UserCreateDto>,
    res: Response<AuthResponse | ErrorResponse>
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
      res.status(400).json({ status: 400, message: "Incorrect data" });
    }
  }
}

export const authController = new AuthController();
