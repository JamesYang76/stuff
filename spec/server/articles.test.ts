import {getIDs, getArticle} from "../../src/server/api/articles";
import {Article} from "../../src/interfaces/article";

const article: Article = {
  id: 123,
  headline: "Test Headline",
  intro: "Test Intro",
  image: { src: "no_url", alt: "test alt"},
  datetime: "today",
  section: 'New Section'
}

jest.mock("../../src/server/api/articles", () => ({
  ...jest.requireActual("../../src/server/api/articles"),
  getIDs: () => Promise.resolve([123]),
  getArticle: () => Promise.resolve(article),
}));

describe("getIDs()", () => {
  test("return ids", async () => {
    const data =  [ 123 ] ;
    const result = await getIDs();
    expect(result).toEqual(data);
  });
});

describe("getArticle(id)", () => {
  test("return an article obj", async () => {
    const result = await getArticle(123);
    expect(result).toEqual(article);
  });
});