/**
 * Método que valida si un número es positivo
 * @param num Número a validar
 */
export const isPositiveNumber = (num: number): boolean => {
  return num > 0;
};

/**
 * Método que valida si un número se encuentra en un rango
 * @param num Número a validar
 * @param min Mínimo
 * @param max Máximo
 */
export const isInRange = (num: number, min: number, max: number): boolean => {
  return num >= min && num <= max;
};

/**
 * Método que valida si es un número entero
 * @param num Número a validar
 */
export const isInteger = (num: number): boolean => {
  return Number.isInteger(num);
};
