import {ArticlesFilter} from "../../src/server/components/articles.filter";
import {Article} from "../../src/interfaces/article";

describe("ArticlesFilter()", () => {
  test("return Articles array filtered by section ", async () => {
    const articles: Article[] = [
      { id:1, datetime:'Now', intro: 'You', section: "YES", headline:"No", image: {src:'no',alt:'al'}},
      { id:2, datetime:'Now', intro: 'You', section: "YES", headline:"No", image: {src:'no',alt:'al'}},
      { id:3, datetime:'Now', intro: 'You', section: "NO", headline:"No", image: {src:'no',alt:'al'}},
    ]
    let filtered_articles = ArticlesFilter(articles, "YES");
    expect(filtered_articles.length).toEqual(2);
  });
});
