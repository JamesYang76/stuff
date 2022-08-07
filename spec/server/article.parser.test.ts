import {ArticleParser} from "../../src/server/components/article.parser";
import {Article} from "../../src/interfaces/article";

describe("ArticleParser()", () => {
  test("return Article type object from raw data", async () => {
    const rawArticle: { id: number; alt_headline: string; alt_intro: string; images: any[]; datetime_display: string; section: string } = {
      id: 12,
      alt_headline: "raw head",
      alt_intro: "raw intro",
      images: [ { variants: [{src: 'test'}] }],
      datetime_display: '2021-10-23',
      section: 'you'
    }

    let result: Article = ArticleParser(rawArticle);

    expect(result.id).toEqual(rawArticle.id);
    expect(result.headline).toEqual(rawArticle.alt_headline);
    expect(result.section).toEqual(rawArticle.section);
    expect(result.datetime).toEqual(new Date(rawArticle.datetime_display));
    expect(result.image.src).toEqual(rawArticle.images[0].variants[0].src);
    expect(result.image.alt).toEqual('Article Image');
  });
});
