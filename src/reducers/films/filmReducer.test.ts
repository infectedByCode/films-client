import filmReducer from './filmsReducer';

describe('#filmReducer', () => {
  test('it returns default state if no action type passed', () => {
    const state = filmReducer(undefined, {});
    expect(state).toEqual([]);
  });
  test('it updates film state when ADD_FILMS is the type', () => {
    const film = {
      uid: '1',
      title: 'a',
      description: 'description',
      year: 1800,
      keywords: ''
    };

    const state = filmReducer([], {
      type: 'ADD_FILMS',
      films: [film]
    });
    expect(state).toEqual([film]);
  });
});
