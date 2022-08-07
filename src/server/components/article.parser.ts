import {Article} from "../../interfaces/article";

export const ArticleParser = (rawArticle: { id: number; alt_headline: string; alt_intro: string; images: any[]; datetime_display: string; section: string }): Article => {
  let article: Article = {
    id: rawArticle.id,
    headline: rawArticle.alt_headline,
    intro: rawArticle.alt_intro,
    image: {
      src: rawArticle.images[0].variants[0].src,
      alt: "Article Image"
    },
    datetime: new Date(rawArticle.datetime_display),
    section: rawArticle.section
  }

  return article;
};
