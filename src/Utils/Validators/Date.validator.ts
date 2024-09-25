/**
 * Método que valida si una fecha es válida
 * @param dateString Fecha a validar
 */
export const isValidDate = (dateString: string): boolean => {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
};

/**
 * Método que valida si una fecha es futura
 * @param dateString Fecha a validar
 */
export const isFutureDate = (dateString: string): boolean => {
  const date = new Date(dateString);
  const today = new Date();
  return date > today;
};

/**
 * Método que valida si una fecha es pasada
 * @param dateString Fecha a validar
 */
export const isPastDate = (dateString: string): boolean => {
  const date = new Date(dateString);
  const today = new Date();
  return date < today;
};
