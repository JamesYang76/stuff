import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { MemoryRouter } from 'react-router'
import ArticleCard from '../../src/client/components/ArticleCard';
import {Article} from "../../src/interfaces/article";

jest.mock("../../src/client/style/articles.css", () => "");
jest.mock("../../src/client/style/card.css", () => "");

describe("<ArticleCard />", () => {
  it('renders headline, intro and image', () => {
    const article: Article = {
      id: 123,
      headline: "Test Headline",
      intro: "Test Intro",
      image: { src: "no_url", alt: "test alt"},
      datetime: "today",
      section: 'New Section'
    }

    render(<MemoryRouter><ArticleCard article={article} /></MemoryRouter>);

    const headline = screen.getByText(article.headline);
    expect(headline).toBeInTheDocument();
    const intro = screen.getByText(article.intro);
    expect(intro).toBeInTheDocument();

    const testImage = document.querySelector("img") as HTMLImageElement;
    expect(testImage.alt).toBe(article.image.alt);
    expect(testImage.src).toContain(article.image.src);
  });
});
