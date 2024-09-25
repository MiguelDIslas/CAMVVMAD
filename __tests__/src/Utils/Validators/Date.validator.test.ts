import {
  isValidDate,
  isFutureDate,
  isPastDate,
} from '@Validators/Date.validator';

describe('dateValidators', () => {
  describe('isValidDate', () => {
    it('Debe validar si una fecha es correcta', () => {
      expect(isValidDate('2024-09-01')).toBe(true);
      expect(isValidDate('2024-09-22T14:30:00Z')).toBe(true);
      expect(isValidDate('22 de September de 2024')).toBe(false);
      expect(isValidDate('Not-Date')).toBe(false);
    });
  });

  describe('isFutureDate', () => {
    it('Debe validar si una fecha es futura', () => {
      expect(isFutureDate('2025-01-01')).toBe(true);
      expect(isFutureDate('2025-09-22T14:30:00Z')).toBe(true);
      expect(isFutureDate('2023-01-01')).toBe(false);
      expect(isFutureDate('2023-09-22T14:30:00Z')).toBe(false);
    });
  });

  describe('isPastDate', () => {
    it('Debe validar si una fecha es pasada', () => {
      expect(isPastDate('2020-01-01')).toBe(true);
      expect(isPastDate('2020-09-22T14:30:00Z')).toBe(true);
      expect(isPastDate('2024-12-31')).toBe(false);
      expect(isPastDate('2025-09-22T14:30:00Z')).toBe(false);
    });
  });
});
