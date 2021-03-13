export const createConfig = (): ConfigObject => {
  return Object.freeze({
    apiUrl: process.env.REACT_APP_API_URL || '',
  });
};
