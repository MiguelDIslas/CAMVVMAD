/**
 * Método para formatear un número con un número específico de decimales
 * @param number Número a formatear
 * @param decimalPlaces Número de decimales
 * @returns Número formateado
 */
export const formatNumber = (
  number: number,
  decimalPlaces: number = 2,
): string => {
  return number.toFixed(decimalPlaces);
};

/**
 * Método para formatear un número como porcentaje
 * @param number Número a formatear
 * @param decimalPlaces Número de decimales
 * @returns Número formateado como porcentaje
 */
export const formatPercentage = (
  number: number,
  decimalPlaces: number = 2,
): string => {
  return `${formatNumber(number * 100, decimalPlaces)}%`;
};
