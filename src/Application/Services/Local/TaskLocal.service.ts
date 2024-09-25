import {TaskDTO} from '@DTO/Task.dto';
import {TaskModel} from '@Models/Task.model';
import {TaskLocalRepository} from '@Repository/Local/TaskLocalRepository';

/**
 * Servicio para manejar las tareas locales
 */
export class TaskLocalService {
  private static localRepo = new TaskLocalRepository();

  /**
   * Método para obtener todas las tareas de realm
   * @returns Todas las tareas
   */
  static async getTasks(): Promise<TaskModel[]> {
    const localTasks = await this.localRepo.getAll();
    return localTasks;
  }

  /**
   * Método para agregar una tarea en realm
   * @param task DTO de la tarea a agregar
   */
  static async addTask(task: TaskDTO): Promise<void> {
    await this.localRepo.add(task);
  }
}
