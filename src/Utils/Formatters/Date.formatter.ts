/**
 * Método utilizado para formatear una fecha en formato legible según el idioma del dispositivo
 * @param dateString Fecha en formato ISO 8601
 * @returns Fecha formateada
 */
export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

/**
 * Método utilizado para formatear una hora en formato legible según el idioma del dispositivo
 * @param dateString Fecha en formato ISO 8601
 * @returns Hora formateada
 */
export const formatTime = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  return new Date(dateString).toLocaleTimeString(undefined, options);
};

/**
 * Método utilizado para formatear una fecha y hora en formato legible según el idioma del dispositivo
 * @param dateString Fecha en formato ISO 8601
 * @returns Fecha y hora formateada
 */
export const formatDateTime = (dateString: string): string => {
  return `${formatDate(dateString)} at ${formatTime(dateString)}`;
};
