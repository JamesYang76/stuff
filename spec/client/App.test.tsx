import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../../src/client/components/App';
import { HashRouter } from 'react-router-dom';
import React from 'react';
jest.mock('../../src/client/components/Articles', () => {return () => <div data-testid='articles-id' />;});

describe("<App />", () => {
  it('renders title and Articles Component', () => {
    render(<HashRouter><App /></HashRouter>);

    const title = screen.getByText("Stuff exercise");
    expect(title).toBeInTheDocument();

    const Articles = screen.getByTestId('articles-id');
    expect(Articles).toBeInTheDocument();
  });
});
