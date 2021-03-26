export const isAlpha = (input: string): boolean => {
  const trimmedInput = input.trim().replace(/ /g, '');
  const matched = trimmedInput.match(/[a-zA-Z]+/g);
  return matched ? matched[0].length === trimmedInput.length : false;
};

export const isEmail = (email: string): boolean => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()])(?!.*[^a-zA-Z0-9!@#$%^&*()])(.{8,15})$/;
  return passwordRegex.test(password);
};
