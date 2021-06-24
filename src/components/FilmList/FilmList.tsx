import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FilmListState } from '../../ts/common/states';
import * as api from '../../utils/apiClient';

// TODO: Extract film card to seperate component

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
    <main>
      <h1>Hello, Films</h1>
      <ol className='grid grid-cols-1 gap-4'>
        {state.data &&
          state.data.map((film) => {
            return (
              <li className='bg-gray-100 shadow-lg' key={film.uid}>
                <h2>{film.title}</h2>
                <p>{film.description}</p>
                <p>Released in {+film.year}</p>
                <div className='grid grid-cols-3 gap-2'>
                  {film.keywords &&
                    film.keywords.split(',').map((keyword, i) => {
                      return (
                        <span className='bg-gray-300 p-1 m-1 rounded' key={i}>
                          {keyword}
                        </span>
                      );
                    })}
                </div>
              </li>
            );
          })}
      </ol>
    </main>
  );
}

export default FilmList;
