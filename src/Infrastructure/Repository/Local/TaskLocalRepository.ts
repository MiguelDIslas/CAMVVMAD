import {realm} from '../../Database/realmConfig';
import {TaskDTO} from '@DTO/Task.dto';
import {TaskModel} from '@Models/Task.model';
import {ITaskLocalRepository} from '@IRepository/Local/ITaskLocalRepository';

/**
 * Repositorio para la manipulación de tareas en realm
 */
export class TaskLocalRepository implements ITaskLocalRepository {
  async add(taskDTO: TaskDTO): Promise<void> {
    realm.write(() => {
      realm.create(TaskModel.name, {
        id: Date.now(),
        title: taskDTO.title,
        completed: false,
      });
    });
  }

  async getAll(): Promise<TaskModel[]> {
    return realm.objects(TaskModel).map(task => task);
  }
}
