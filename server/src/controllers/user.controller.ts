import { Request, Response } from "express";
import { userService } from "../services/user.service";
import { User } from "../db/entities/user";
import { ErrorResponse } from "../types/responses/error.response";
class UserController {
  async getUserById(
    req: Request<{ id: string }>,
    res: Response<Omit<User, "password"> | ErrorResponse>
  ) {
    try {
      const user = await userService.getUserById(req.params.id);
      return res.render("user", {
        id: user.id,
        email: user.email,
        bio: user.bio,
      });
    } catch (error) {
      return res.status(404).json({ status: 404, message: "Not found" });
    }
  }

  async getAllUsers(req: Request, res: Response<User[]>) {
    const users = await userService.getUsers();
    return res.status(200).json(users);
  }
}

export const userController = new UserController();
