import {TaskDTO} from '../../DTO/Task.dto';

/**
 * Interfaz para el repositorio de tareas remoto
 */
export interface ITaskRemoteRepository {
  /**
   * Método para obtener todas las tareas desde el WS
   */
  getAll(): Promise<TaskDTO[]>;

  /**
   * Método para agregar una tarea en el WS
   * @param task DTO de la tarea a agregar
   */
  add(task: TaskDTO): Promise<void>;
}
