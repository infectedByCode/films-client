import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FilmListState } from '../../ts/common/states';
import * as api from '../../utils/apiClient';
import FilmCard from '../FilmCard/FilmCard';

function FilmList() {
  const dispatch = useDispatch();

  const [state, setState] = useState<FilmListState>({
    status: 'success',
    data: null
  });

  useEffect(() => {
    api.fetchFilms().then((response) => {
      setState((state) => ({ ...state, data: response }));
      dispatch({ type: 'ADD_FILMS', films: response });
    });
  }, [dispatch]);

  return (
    <section>
      <h1>Hello, Films</h1>
      <ol className='grid grid-cols-1 gap-4'>
        {state.data &&
          state.data.map((film) => <FilmCard film={film} key={film.uid} />)}
      </ol>
    </section>
  );
}

export default FilmList;
