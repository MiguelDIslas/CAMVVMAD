/**
 * Método para capitalizar la primera letra de una cadena de texto
 * @param string Cadena de texto a capitalizar
 * @returns Cadena de texto con la primera letra en mayúscula
 */
export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Método para capitalizar la primera letra de una cadena de texto y eliminar los espacios en blanco al inicio y al final
 * @param str Cadena de texto a capitalizar
 * @returns Cadena de texto con la primera letra en mayúscula y sin espacios en blanco al inicio y al final
 */
export const capitalizeFirstLetterTrim = (str: string): string => {
  return capitalizeFirstLetter(str.trim());
};

/**
 * Método para capitalizar la primera letra de cada palabra de una cadena de texto
 * @param str Cadena de texto a capitalizar
 * @returns Cadena de texto con la primera letra de cada palabra en mayúscula
 */
export const textToCapitalizedEachWord = (str: string): string => {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

/**
 * Método para truncar una cadena de texto a un número máximo de caracteres
 * @param str Cadena de texto a truncar
 * @param maxLength Número máximo de caracteres
 * @returns Cadena de texto truncada
 */
export const truncateString = (str: string, maxLength: number): string => {
  return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
};
