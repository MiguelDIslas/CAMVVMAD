import {TaskDTO} from '@DTO/Task.dto';
import {TaskRemoteRepository} from '@Repository/Remote/TaskRemoteRepository';

/**
 * Servicio para manejar las tareas remotas
 */
export class TaskRemoteService {
  private static remoteRepo = new TaskRemoteRepository();

  /**
   * Método para obtener todas las tareas
   * @returns Todas las tareas
   */
  static async getTasks(): Promise<TaskDTO[]> {
    return this.remoteRepo.getAll();
  }

  /**
   * Método para agregar una tarea
   * @param task DTO de la tarea a agregar
   */
  static async addTask(task: TaskDTO): Promise<void> {
    await this.remoteRepo.add(task);
  }
}
