import {isToday, daysBetween} from '@Helpers/Date.helper';

describe('Date.helper', () => {
  describe('isToday', () => {
    it('Debe retorna verdadero si es el día de hoy', () => {
      const today = new Date().toISOString();
      const notToday = '2022-09-22T14:30:00Z';

      expect(isToday(today)).toBe(true);
      expect(isToday(notToday)).toBe(false);
    });
  });

  describe('daysBetween', () => {
    it('Debe retornar el tiempo correcto entre 2 fechas', () => {
      const startDate = '2024-09-01';
      const endDate = '2024-09-10';

      expect(daysBetween(startDate, endDate)).toBe(9);
    });
  });
});
