import {
  isPositiveNumber,
  isInRange,
  isInteger,
} from '@Validators/Number.validator';

describe('numberValidators', () => {
  describe('isPositiveNumber', () => {
    it('Verifica que un número sea positivo', () => {
      expect(isPositiveNumber(5)).toBe(true);
      expect(isPositiveNumber(-3)).toBe(false);
      expect(isPositiveNumber(0)).toBe(false);
    });
  });

  describe('isInRange', () => {
    it('Verifica si un número está en un rango dado', () => {
      expect(isInRange(5, 1, 10)).toBe(true);
      expect(isInRange(0, 1, 10)).toBe(false);
    });
  });

  describe('isInteger', () => {
    it('Verifica si un número es un entero', () => {
      expect(isInteger(5)).toBe(true);
      expect(isInteger(5.5)).toBe(false);
    });
  });
});
