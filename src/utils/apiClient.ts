import { createConfig } from '../config';
import { Film } from '../ts/common/pageStates';
const { apiUrl } = createConfig();

export const registerUser = (): any => {
  // TODO: pass in data from from
  const data = {};
  return fetch(`${apiUrl}/api/users`, {
    method: 'post',
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status !== 201) {
        return { status: response.status, msg: response.statusText };
      }
      return response.json();
    })
    .then((data) => {
      // do something
      return data;
    });
};

export const fetchFilms = (): Promise<Film[]> => {
  return fetch(`${apiUrl}/api/films`)
    .then((response) => {
      if (response.status !== 200) {
        return { status: response.status, msg: response.statusText };
      }
      return response.json();
    })
    .then((data) => {
      return data.films;
    });
};
