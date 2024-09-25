import {TaskRemoteService} from '@Services/Remote/TaskRemote.service';
import {TaskDTO} from '@DTO/Task.dto';

/**
 * Caso de uso para agregar una tarea en el WS
 */
export class AddTaskRemoteUseCase {
  /**
   * Ejecución del caso de uso para agregar una tarea en el WS
   * @param task DTO de la tarea a agregar
   */
  static async execute(task: TaskDTO): Promise<void> {
    return TaskRemoteService.addTask(task);
  }
}
