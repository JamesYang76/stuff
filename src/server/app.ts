import express, { Request, Response, NextFunction } from "express";
import path from "path";
import articlesRouter from "./routes/articles.routes";
const app = express();

app.use(express.static(path.join(__dirname, "../../public")));

app.use("/articles", articlesRouter);

app.get("/*", (req: Request, res: Response, next: NextFunction): void => {
  try {
   res.sendFile(path.join(__dirname, '../../public/index.html'));
  } catch (error) {
    next(error);
  }
});


export default app;