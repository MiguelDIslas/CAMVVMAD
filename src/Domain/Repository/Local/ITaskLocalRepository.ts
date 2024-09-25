import {TaskDTO} from '../../DTO/Task.dto';
import {TaskModel} from '../../Models/Task.model';

/**
 * Interfaz para el repositorio local de tareas
 */
export interface ITaskLocalRepository {
  /**
   * Método para obtener todas las tareas desde Realm
   */
  getAll(): Promise<TaskModel[]>;

  /**
   * Método para agregar una tarea en Realm
   * @param task DTO de la tarea a agregar
   */
  add(task: TaskDTO): Promise<void>;
}
