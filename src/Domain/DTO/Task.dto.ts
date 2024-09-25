/**
 * Objeto de transferencia de datos para la tarea
 */
export interface TaskDTO {
  /**
   * Identificador de la tarea
   */
  id: string;

  /**
   * Título de la tarea
   */
  title: string;

  /**
   * Descripción de la tarea
   */
  description: string;
}
