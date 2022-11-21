import { Response, Request } from "express";
export const notFoundMiddleware = (req: Request, res: Response) => {
  return res.render("404.ejs");
};
