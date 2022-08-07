import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import React from "react";
import Articles from "../../src/client/components/Articles";
jest.mock("../../src/client/style/articles.css", () => "");
jest.mock('../../src/client/components/ArticleCard', () => {return () => <div data-testid='article-card-id' />;});

jest.spyOn(React, 'useState')
  .mockImplementationOnce(() => [[], () => null])
  .mockImplementationOnce(() => [{
    order_by: 'desc',
    filter_by: 'All'
  }, () => null])
  .mockImplementationOnce(() => [true, () => null])
  .mockImplementationOnce(() => [[], () => null])

const useEffect = jest.fn();
jest.spyOn(React, 'useEffect').mockImplementation(() => useEffect);

describe("<Articles />", () => {
  it('renders title, sort and filter', () => {
    render(<Articles />);

    const title = screen.getByText("Articles");
    expect(title).toBeInTheDocument();

    const sort = screen.getByText("Sort by(DateTime):");
    expect(sort).toBeInTheDocument();

    const filter = screen.getByText("Filter by(Section):");
    expect(filter).toBeInTheDocument();
  });
});
