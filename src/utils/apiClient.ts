import { createConfig } from '../config';
const { apiUrl } = createConfig();

export const registerUser = (): any => {
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
