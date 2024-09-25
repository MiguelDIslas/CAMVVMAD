/**
 * Método para verificar si una fecha es de hoy
 * @param dateString Fecha en formato ISO 8601
 */
export const isToday = (dateString: string): boolean => {
  const today = new Date();
  const date = new Date(dateString);
  return (
    today.getFullYear() === date.getFullYear() &&
    today.getMonth() === date.getMonth() &&
    today.getDate() === date.getDate()
  );
};

/**
 * Método para obtener los días entre dos fechas
 * @param startDate Fecha de inicio
 * @param endDate Fecha de fin
 * @returns Número de días entre las dos fechas
 */
export const daysBetween = (startDate: string, endDate: string): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};
