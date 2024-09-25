import {TaskLocalService} from '@Services/Local/TaskLocal.service';
import {TaskDTO} from '@DTO/Task.dto';

/**
 * Caso de uso para agregar una tarea en realm
 */
export class AddTaskLocalUseCase {
  /**
   * Ejecución del caso de uso para agregar una tarea en realm
   * @param task DTO de la tarea a agregar
   */
  static async execute(task: TaskDTO): Promise<void> {
    return TaskLocalService.addTask(task);
  }
}
