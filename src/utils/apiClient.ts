import { createConfig } from '../config';
const { apiUrl } = createConfig();

export const registerUser = (): any => {
  fetch(`${apiUrl}/api/users`, {
    method: 'post',
  })
    .then((response) => {
      if (response.status !== 201) {
        return { status: response.status, msg: response.statusText };
      }
      return response.json();
    })
    .then((data) => {
      // do something
      console.log(data);
    });
};
