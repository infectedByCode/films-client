import { render, screen } from '@testing-library/react';
import FilmList from './FilmList';

describe('#FilmList', () => {
  test('it renders a list of films', async () => {
    render(<FilmList />);

    const lis = await screen.findAllByRole('listitem');
    expect(lis).toHaveLength(2);
  });
});
