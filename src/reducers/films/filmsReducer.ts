import { Film } from '../../ts/common/pageStates';

const filmsReducer = (
  state = [],
  action: { type?: string; films?: Film[] }
) => {
  switch (action.type) {
    case 'ADD_FILMS':
      return [...state, ...(action.films || [])];
    default:
      return state;
  }
};

export default filmsReducer;
