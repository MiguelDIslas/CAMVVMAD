/**
 * Método que retorna las llaves de un objeto
 * @param obj Objeto del cual se obtendrán las llaves
 * @returns Arreglo de llaves
 */
export const getObjectKeys = (obj: object): string[] => {
  return Object.keys(obj);
};
