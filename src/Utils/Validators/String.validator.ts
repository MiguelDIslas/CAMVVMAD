/**
 * Método que valida si una cadena de texto cumple con la longitud mínima y máxima
 * @param str Cadena de texto a validar
 * @param min Longitud mínima
 * @param max Longitud máxima
 */
export const isValidLength = (
  str: string,
  min: number,
  max: number,
): boolean => {
  const length = str.length;
  return length >= min && length <= max;
};

/**
 * Método que valida si una cadena de texto contiene caracteres especiales
 * @param str Cadena de texto a validar
 */
export const containsSpecialChars = (str: string): boolean => {
  const specialChars = /[!@#$%^&*(),.?":{}|<>]/g;
  return specialChars.test(str);
};

/**
 * Método que valida si una cadena de texto contiene números
 * @param str Cadena de texto a validar
 */
export const startsWithUpperCase = (str: string): boolean => {
  return /^[A-Z]/.test(str);
};
