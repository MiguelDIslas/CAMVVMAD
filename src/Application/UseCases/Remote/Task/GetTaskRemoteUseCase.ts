import {TaskRemoteService} from '@Services/Remote/TaskRemote.service';
import {TaskDTO} from '@DTO/Task.dto';

/**
 * Caso de uso para obtener las tareas del WS
 */
export class GetTasksRemoteUseCase {
  /**
   * Ejecución del caso de uso
   * @returns Todas las tareas del WS
   */
  static async execute(): Promise<TaskDTO[]> {
    return TaskRemoteService.getTasks();
  }
}
