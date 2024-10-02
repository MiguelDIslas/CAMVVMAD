import {
  truncateString,
  capitalizeFirstLetter,
  textToCapitalizedEachWord,
  capitalizeFirstLetterTrim,
} from '@Formatters/String.formatter';

describe('String.formatter', () => {
  describe('capitalizeFirstLetter', () => {
    it('Debe convertir la primera letra como mayúscula', () => {
      expect(capitalizeFirstLetter('click')).toBe('Click');
      expect(capitalizeFirstLetter('  click')).toBe('  click');
    });
  });

  describe('textToCapitalizedEachWord', () => {
    it('Debe convertir la primera letra de cada palabra como mayúscula', () => {
      expect(textToCapitalizedEachWord('click here')).toBe('Click Here');
    });
  });

  describe('capitalizeFirstLetterTrim', () => {
    it('Debe convertir la primera letra como mayúscula y eliminar los espacios en blanco al inicio y al final', () => {
      expect(capitalizeFirstLetterTrim('  click  ')).toBe('Click');
    });
  });

  describe('truncateString', () => {
    it('Debe truncar una cadena de texto a un número máximo de caracteres', () => {
      expect(
        truncateString(
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque animi nihil perspiciatis saepe similique totam reprehenderit neque quibusdam rerum ad exercitationem accusamus iste, dicta, consequuntur quasi maiores dolores, eum ipsa.',
          10,
        ),
      ).toBe('Lorem ipsu...');
    });
  });
});
