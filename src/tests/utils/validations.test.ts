import * as validation from '../../utils/validations';

describe('#validations', () => {
  describe('#isAlpha', () => {
    test('it return true for an alpha only string', () => {
      let result = validation.isAlpha('anAlphaString');
      expect(result).toBe(true);

      result = validation.isAlpha('alsoalpha');
      expect(result).toBe(true);

      result = validation.isAlpha('BIGALPHA');
      expect(result).toBe(true);
    });
    test('it returns false if contains non-alpha characters', () => {
      let result = validation.isAlpha('anAlphaString1');
      expect(result).toBe(false);

      result = validation.isAlpha('alsoalpha@');
      expect(result).toBe(false);

      result = validation.isAlpha('BIGALP(HA');
      expect(result).toBe(false);
    });
  });
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
  describe('#isValidPassword', () => {
    test('it returns true for valid passwords - capital and lowercase letter, number, symbol and length 8-15', () => {
      const result = validation.isValidPassword('Pizza$12');
      expect(result).toBe(true);
    });
    test('it returns false if invalid password', () => {
      let result = validation.isValidPassword('Pizza$2');
      expect(result).toBe(false);

      result = validation.isValidPassword('Pizza22222');
      expect(result).toBe(false);

      result = validation.isValidPassword('111pizza$2');
      expect(result).toBe(false);

      result = validation.isValidPassword('111pizza$2Ptoolong');
      expect(result).toBe(false);
    });
  });
});
