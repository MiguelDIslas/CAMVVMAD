import {formatNumber, formatPercentage} from '@Formatters/Number.formatter';

describe('Number.formatter', () => {
  describe('formatNumber', () => {
    it('Debe darle formato al número con 2 decimales por defecto', () => {
      expect(formatNumber(1234.5678)).toBe('1234.57');
    });

    it('Debe darle formato al número con 0 decimales', () => {
      expect(formatNumber(1234.5678, 0)).toBe('1235');
    });

    it('Debe darle formato al número con 1 decimales', () => {
      expect(formatNumber(1234.5678, 1)).toBe('1234.6');
    });

    it('Debe darle formato al número con 2 decimales', () => {
      expect(formatNumber(1234.5678, 2)).toBe('1234.57');
    });

    it('Debe darle formato al número con 3 decimales', () => {
      expect(formatNumber(1234.5678, 3)).toBe('1234.568');
    });
  });

  describe('formatPercentage', () => {
    it('Debe darle formato al porcentaje correctamente', () => {
      expect(formatPercentage(0.25)).toBe('25.00%');
    });

    it('Debe darle formato al porcentaje con 0 decimales', () => {
      expect(formatPercentage(0.25, 0)).toBe('25%');
    });
  });
});
