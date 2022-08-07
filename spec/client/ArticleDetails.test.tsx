import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import React from "react";

import ArticleDetails from '../../src/client/components/ArticleDetails';
import {Article} from "../../src/interfaces/article";
const article: Article = {
  id: 123,
  headline: "Test Headline",
  intro: "Test Intro",
  image: { src: "no_url", alt: "test alt"},
  datetime: "today",
  section: 'New Section' as string
}

jest.spyOn(React, 'useState')
  .mockImplementationOnce(() => [false, () => null])
  .mockImplementationOnce(() => [article, () => null])

const useEffect = jest.fn();
jest.spyOn(React, 'useEffect').mockImplementation(() => useEffect);


describe("<ArticleDetails />", () => {
  it('renders details information', () => {
    render(<ArticleDetails />);

    const header = screen.getByText('Article Details');
    expect(header).toBeInTheDocument();

    const id = screen.getByText(article.id);
    expect(id).toBeInTheDocument();

    const headline = screen.getByText(article.headline);
    expect(headline).toBeInTheDocument();

    const intro = screen.getByText(article.intro);
    expect(intro).toBeInTheDocument();

    const datetime = screen.getByText(article.datetime as string);
    expect(datetime).toBeInTheDocument();

    const section = screen.getByText(article.section);
    expect(section).toBeInTheDocument();

    const testImage = document.querySelector("img") as HTMLImageElement;
    expect(testImage.alt).toBe(article.image.alt);
    expect(testImage.src).toContain(article.image.src);
  });
});
