/**
 * Método para validar un email con una expresión regular
 * @param email Email a validar
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Método para validar una contraseña con las siguientes reglas:
 * - Al menos 8 caracteres
 * - Al menos una letra mayúscula
 * - Al menos una letra minúscula
 * - Al menos un número
 * - Al menos un carácter especial
 * @param password Contraseña a validar
 */
export const isValidPassword = (password: string): boolean => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};
