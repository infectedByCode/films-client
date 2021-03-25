import * as validation from './validations';

describe('#validations', () => {
  describe('#isEmail', () => {
    test('it returns false if empty string is passed', () => {
      const email = '';
      const result = validation.isEmail(email);
      expect(result).toBe(false);
    });
    test('it returns true for valid emails', () => {
      let email = 'me@me.com';
      let result = validation.isEmail(email);
      expect(result).toBe(true);

      email = 'a@hotmail.co.uk';
      result = validation.isEmail(email);
      expect(result).toBe(true);

      email = 'a@hotmail.co.nz';
      result = validation.isEmail(email);
      expect(result).toBe(true);
    });
    test('it returns false for invalid emails', () => {
      let email = 'me@me';
      let result = validation.isEmail(email);
      expect(result).toBe(false);

      email = 'a@hotmailcom';
      result = validation.isEmail(email);
      expect(result).toBe(false);
    });
  });
});
