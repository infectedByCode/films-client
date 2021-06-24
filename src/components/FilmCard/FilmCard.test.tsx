import { render, screen } from '@testing-library/react';
import FilmCard from './FilmCard';

describe('#FilmCard', () => {
  test('it renders a film card', () => {
    render(
      <FilmCard
        film={{
          uid: '123',
          title: 'filmA',
          description: 'describe me',
          year: 1800,
          keywords: ''
        }}
      />
    );
    screen.getByText('filmA');
    screen.getByText('describe me');
    screen.getByText('Released in 1800');
  });
});
