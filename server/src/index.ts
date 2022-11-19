import express, { Express } from "express";
import cors from "cors";
import { authRouter } from "./routers/auth.router";
import { userRouter } from "./routers/users.router";
const app: Express = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use((req, res) => {
  return res
    .status(404)
    .json({ status: 404, message: `No data for path ${req.url}` });
});
app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
