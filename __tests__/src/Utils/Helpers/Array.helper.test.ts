import {uniqueArray} from '@Helpers/Array.helper';

describe('Array.helper', () => {
  describe('uniqueArray', () => {
    it('Debe retornar un arreglo con elementos sin repetir', () => {
      const input = [1, 2, 2, 3, 4, 4];
      const result = uniqueArray(input);

      expect(result).toEqual([1, 2, 3, 4]);
    });
  });
});
