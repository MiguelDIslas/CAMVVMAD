import {
  isValidEmail,
  isValidPassword,
} from '@Validators/Authentication.validator';

describe('Authentication.validator', () => {
  describe('isValidEmail', () => {
    it('Debe retornar verdadero si el correo es correcto', () => {
      const email = 'miguel@gmail.com';
      const email2 = 'miguel@gmail';

      expect(isValidEmail(email)).toBe(true);
      expect(isValidEmail(email2)).toBe(false);
    });
  });

  describe('isValidPassword', () => {
    it('Debe retornar verdadero si la contraseña es cumple con las reglas', () => {
      const password = 'Prueba1234';
      const password2 = 'Prueba1234$';
      const password3 = 'prueba1234$';

      expect(isValidPassword(password)).toBe(false);
      expect(isValidPassword(password2)).toBe(true);
      expect(isValidPassword(password3)).toBe(false);
    });
  });
});
