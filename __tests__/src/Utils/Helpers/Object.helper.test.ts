import {getObjectKeys} from '@Helpers/Object.helper';

describe('Object.helper', () => {
  describe('getObjectKeys', () => {
    it('Debe retornar solamente las llaves de un objeto', () => {
      const obj = {a: 1, b: 2, c: 3};

      expect(getObjectKeys(obj)).toEqual(['a', 'b', 'c']);
    });
  });
});
