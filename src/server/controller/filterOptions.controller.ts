import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";
import {getIDs, getArticle} from "../api/articles";
import {Article} from "../../interfaces/article";

export const filterOptionsRequest = async (req: Request, res: Response) => {
  try {
    let ids = await getIDs();
    let filter_options: string[] = [];
    await Promise.all(ids.map(async (id: number) => {
      let article: Article = await getArticle(id)

      filter_options.push(article.section)
    }));

    let unique_options: string[] = [...new Set(filter_options)];
    unique_options.sort();

    res.status(StatusCodes.OK).json(unique_options);
  }
  catch(e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
  }
}
