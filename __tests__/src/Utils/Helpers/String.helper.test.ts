import {isEmpty} from '@Helpers/String.helper';

describe('String.helper', () => {
  describe('isEmpty', () => {
    it('Debe retornar verdadero si la cadena es vacía', () => {
      expect(isEmpty('')).toBe(true);
      expect(isEmpty('   ')).toBe(true);
      expect(isEmpty('test')).toBe(false);
    });
  });
});
