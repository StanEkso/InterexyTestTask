import { Request, Response } from "express";
import { userService } from "../services/user.service";
import { User } from "../db/entities/user";
class UserController {
  async getUserById(
    req: Request<{ id: string }>,
    res: Response<Omit<User, "password"> | { message: string }>
  ) {
    try {
      const user = await userService.getUserById(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);

      return res.status(404).json({ message: "Not found" });
    }
  }

  async getAllUsers(req: Request, res: Response<User[]>) {
    const users = await userService.getUsers();
    return res.status(200).json(users);
  }
}

export const userController = new UserController();
