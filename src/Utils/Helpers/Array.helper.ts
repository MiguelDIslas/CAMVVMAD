/**
 * Método para eliminar elementos duplicados de un array
 * @param array Array de elementos
 * @returns Array sin elementos duplicados
 */
export const uniqueArray = <T>(array: T[]): T[] => {
  return Array.from(new Set(array));
};
