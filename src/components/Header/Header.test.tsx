import { render, screen } from '@testing-library/react';
import { Router } from 'react-router';
import Header from './Header';
import { createBrowserHistory } from 'history';

const customHistory = createBrowserHistory();

describe('#Header', () => {
  test('it renders the Header component without error', async () => {
    render(
      <Router history={customHistory}>
        <Header />;
      </Router>
    );

    const links = await screen.findAllByRole('link');
    expect(links).toHaveLength(3);
  });
});
