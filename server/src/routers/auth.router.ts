import { Router } from "express";
import { authController } from "../controllers/auth.controller";
import { authMiddleWare } from "../middleware/auth.middleware";

export const authRouter = Router();

authRouter.post("/signup", authController.createUser);
authRouter.post("/signin", authController.loginUser);
authRouter.get("/refresh", authMiddleWare, authController.refreshToken);
