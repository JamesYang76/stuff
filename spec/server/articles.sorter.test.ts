import {ArticlesSorter} from "../../src/server/components/articles.sorter";
import {Article} from "../../src/interfaces/article";


describe("ArticlesSorter()", () => {
  test("sorts Articles array by datetime desc", async () => {
    let articles: Article[] = [
      { id:1, datetime: new Date('2022-03-01'), intro: 'You', section: "YES", headline:"No", image: {src:'no',alt:'al'}},
      { id:2, datetime:new Date('2022-03-02'), intro: 'You', section: "YES", headline:"No", image: {src:'no',alt:'al'}},
    ]
     ArticlesSorter(articles, "desc");
    expect(articles[0].id).toEqual(2);
  });

  test("sorts Articles array by datetime asc", async () => {
    let articles: Article[] = [
      { id:1, datetime: new Date('2022-03-01'), intro: 'You', section: "YES", headline:"No", image: {src:'no',alt:'al'}},
      { id:2, datetime:new Date('2022-03-02'), intro: 'You', section: "YES", headline:"No", image: {src:'no',alt:'al'}},
    ]
    ArticlesSorter(articles, "asc");
    expect(articles[0].id).toEqual(1);
  });
});