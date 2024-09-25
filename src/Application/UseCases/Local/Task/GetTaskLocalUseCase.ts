import {TaskLocalService} from '@Services/Local/TaskLocal.service';
import {TaskModel} from '@Models/Task.model';

/**
 * Caso de uso para obtener todas las tareas en realm
 */
export class GetTasksLocalUseCase {
  /**
   * Ejecución del caso de uso
   * @returns Todas las tareas en realm
   */
  static async execute(): Promise<TaskModel[]> {
    return TaskLocalService.getTasks();
  }
}
