import { StatusCodes } from "http-status-codes";
import request from "supertest";
import app from "../../src/server/app";
import {Article} from "../../src/interfaces/article";

const article: Article = {
  id: 123,
  headline: "Test Headline",
  intro: "Test Intro",
  image: { src: "no_url", alt: "test alt"},
  datetime: "2021-01-01",
  section: 'New Section'
}

jest.mock("../../src/server/api/articles", () => ({
  ...jest.requireActual("../../src/server/api/articles"),
  getIDs: () => Promise.resolve([123]),
  getArticle: () => Promise.resolve(article),
}));

jest.mock("../../src/server/components/article.parser", () => ({
  ...jest.requireActual("../../src/server/components/article.parser"),
  ArticleParser: () => article
}));

describe("The root path", () => {
  test("It should response the GET method", () => {
    return request(app).get("/").expect(StatusCodes.OK);
  });
});

describe("filterOptions", () => {
  test("It should response the GET method", () => {
    return request(app).get("/articles/filterOptions").expect(StatusCodes.OK);
  });
});

describe("anArticleRequest", () => {
  test("It should response the GET method", () => {
    return request(app).get("/articles/123").expect(StatusCodes.OK);
  });
});
