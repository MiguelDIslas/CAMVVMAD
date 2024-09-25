import {
  isValidLength,
  containsSpecialChars,
  startsWithUpperCase,
} from '@Validators/String.validator';

describe('stringValidators', () => {
  describe('isValidLength', () => {
    it('Valida la longitud de la cadena', () => {
      expect(isValidLength('test', 2, 5)).toBe(true);
      expect(isValidLength('test', 5, 10)).toBe(false);
    });
  });

  describe('containsSpecialChars', () => {
    it('Verifica si la cadena contiene caracteres especiales', () => {
      expect(containsSpecialChars('Hello!')).toBe(true);
      expect(containsSpecialChars('Hello')).toBe(false);
    });
  });

  describe('startsWithUpperCase', () => {
    it('Verifica si la cadena comienza con mayúscula', () => {
      expect(startsWithUpperCase('Hello')).toBe(true);
      expect(startsWithUpperCase('hello')).toBe(false);
    });
  });
});
