import { Router, Request, Response } from "express";
import { authController } from "../controllers/auth.controller";

export const authRouter = Router();
authRouter.get("/", (req, res) => {
  const body = req.body;
  return res.status(200).json({ message: "123" });
});
authRouter.post("/signup", authController.createUser);
authRouter.post("/signin", authController.loginUser);
