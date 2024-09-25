import Realm from 'realm';

const TaskModelName = 'Task';

/**
 * Modelo de la tarea local
 */
export class TaskModel extends Realm.Object {
  /**
   * ID de la tarea
   */
  id!: number;

  /**
   * Título de la tarea
   */
  title!: string;

  /**
   * Indica si la tarea está completada
   */
  completed!: boolean;

  static schema = {
    name: TaskModelName,
    properties: {
      id: 'int',
      title: 'string',
      completed: 'bool',
    },
    primaryKey: 'id',
  };
}
