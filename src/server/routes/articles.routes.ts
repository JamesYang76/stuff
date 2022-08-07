import express from "express";
import {anArticleRequest, articlesRequest} from "../controller/articles.controller";
import {filterOptionsRequest} from "../controller/filterOptions.controller";
const articlesRouter = express.Router();

articlesRouter.get("/", articlesRequest);
articlesRouter.get("/filterOptions", filterOptionsRequest);
articlesRouter.get("/:id", anArticleRequest);

export default articlesRouter;