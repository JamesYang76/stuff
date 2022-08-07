import {Article} from "../../interfaces/article";

export const ArticlesFilter = (articles: Article[] = [], filter_by: string="All"): Article[] => {
  if (filter_by === "All") return articles;

  return articles.filter(article => article.section === filter_by);
};
