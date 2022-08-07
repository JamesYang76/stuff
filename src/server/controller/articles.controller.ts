import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";
import {getIDs, getArticle} from "../api/articles";
import {Article} from "../../interfaces/article";
import {ArticleParser} from "../components/article.parser";
import {ArticlesSorter} from "../components/articles.sorter";
import {ArticlesFilter} from "../components/articles.filter";

export const articlesRequest = async (req: Request, res: Response) => {
  try {
    let ids = await getIDs();
    let articles: Article[] = [];
    const order_by: string = <string>req.query.order_by;
    const filter_by: string = <string>req.query.filter_by;

    await Promise.all(ids.map(async (id: number) => {
      let row_article = await getArticle(id)
      articles.push(ArticleParser(row_article));
    }));

    articles = ArticlesFilter(articles, filter_by);
    ArticlesSorter(articles, order_by);
    res.status(StatusCodes.OK).json(articles);
  }
  catch(e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
  }
}

export const anArticleRequest = async (req: Request, res: Response) => {
  try {
    let id: number = Number(req.params.id);
    let articles: Article = ArticleParser(await getArticle(id))
    res.status(StatusCodes.OK).json(articles);
  }
  catch(e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
  }
}
