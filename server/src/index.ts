import express, { Express } from "express";
import cors from "cors";
import { authRouter } from "./routers/auth.router";
import { userRouter } from "./routers/users.router";
import { notFoundMiddleware } from "./middleware/notfound.middleware";
import path from "path";
const app: Express = express();
const PORT = process.env.PORT || 5000;
app.set("views", path.join(__dirname, "views/"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use(notFoundMiddleware);
app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
