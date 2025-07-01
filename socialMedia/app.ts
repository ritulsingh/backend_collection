import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import connectDB from "./db";
import config from "./config";
import postRouter from "./routes/post.routes";
import userRouter from "./routes/user.routes";

const app: Express = express();

app.use(express.json());
app.use(morgan("dev"));

app.use(postRouter);
app.use(userRouter);

app.get("/", (_req: Request, res: Response) => {
  return res.send("Social Media Backend");
});

connectDB()
  .then(() => {
    app.listen(config.port, () => {
      console.log(`Server is running on port: ${config.port}`);
    });
  })
  .catch((error: any) => {
    console.error("Error starting the server:", error);
    process.exit(1);
  });
