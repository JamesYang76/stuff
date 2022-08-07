import {Article} from "../../interfaces/article";

export const ArticlesSorter = (articles: Article[] = [], order_by: string="desc"): void => {
  if(order_by === "desc")
    articles.sort((a,b)=> {
      let b_date_time: Date = <Date>b.datetime;
      let a_date_time: Date = <Date>a.datetime;

      return b_date_time.getTime() - a_date_time.getTime();
    });
  else
    articles.sort((a,b) => {
      let a_date_time: Date = <Date>a.datetime;
      let b_date_time: Date = <Date>b.datetime;

      return a_date_time.getTime() - b_date_time.getTime();
    });
};
