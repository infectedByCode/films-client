import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { Router } from 'react-router';
import Header from './Header';
import { createBrowserHistory } from 'history';

const customHistory = createBrowserHistory();

describe('#Header', () => {
  test('it renders the Header component for desktop without error', async () => {
    render(
      <Router history={customHistory}>
        <Header />;
      </Router>
    );

    // set the innerWidth to trigger desktop view
    global.innerWidth = 1400;
    act(() => {
      global.dispatchEvent(new Event('resize'));
    });

    const links = await screen.findAllByRole('link');
    expect(links).toHaveLength(4);
  });
  test('it displays mobile menu on mobile devices which can be toggled', async () => {
    render(
      <Router history={customHistory}>
        <Header />;
      </Router>
    );
    // set the innerWidth to trigger mobile view
    global.innerWidth = 375;
    act(() => {
      global.dispatchEvent(new Event('resize'));
    });
    // get all links
    let links = await screen.findAllByRole('link');
    expect(links).toHaveLength(1);
    // click menu button
    userEvent.click(screen.getByRole('button', { name: 'Menu' }));
    // get new links
    links = await screen.findAllByRole('link');
    expect(links).toHaveLength(4);
  });
});
