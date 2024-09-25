/**
 * Método para verificar si una cadena de texto está vacía
 * @param str Cadena de texto a verificar
 */
export const isEmpty = (str: string): boolean => {
  return !str || str.trim().length === 0;
};
