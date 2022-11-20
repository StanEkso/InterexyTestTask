import { NextFunction, Request, Response } from "express";
import { jwtService } from "../services/jwt.service";
import { ErrorResponse } from "../types/responses/error.response";

export const authMiddleWare = (
  req: Request,
  res: Response<ErrorResponse>,
  next: NextFunction
) => {
  const bearerToken = req.headers.authorization || "";
  console.log(bearerToken);

  const [type, token] = bearerToken.split(" ");
  if (!token || type !== "Bearer") {
    return res.status(403).json({ status: 403, message: "Forbidden" });
  }
  const decoded = jwtService.validateUserToken(token);
  if (!decoded) {
    return res.status(403).json({ status: 403, message: "Forbidden" });
  }
  req.user = {
    id: decoded.id,
    _id: decoded._id,
    bio: decoded.bio,
    email: decoded.email,
  };
  next();
};
