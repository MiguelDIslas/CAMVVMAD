import apiClient from '../../Api/apiClient';
import {TaskDTO} from '@DTO/Task.dto';
import {ITaskRemoteRepository} from '@IRepository/Remote/ITaskRemoteRepository';

/**
 * Repositorio para la manipulación de tareas en el WS
 */
export class TaskRemoteRepository implements ITaskRemoteRepository {
  private endpoint = '/tasks';

  async getAll(): Promise<TaskDTO[]> {
    return apiClient.get<TaskDTO[]>(this.endpoint);
  }

  async add(task: TaskDTO): Promise<void> {
    await apiClient.post<TaskDTO>(this.endpoint, task);
  }
}
