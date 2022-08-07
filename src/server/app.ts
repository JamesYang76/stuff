import express, { Request, Response, NextFunction } from "express";
import path from "path";
import articlesRouter from "./routes/articles.routes";
const app = express();

app.use(express.static(path.join(__dirname, "../../public")));

app.get("/", (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.send("index.html");
  } catch (error) {
    next(error);
  }
});


app.use("/articles", articlesRouter);

export default app;