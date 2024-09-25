import Realm from 'realm';
import {TaskModel} from '@Models/Task.model';

/**
 * Ruta donde se guardará la base de datos
 */
const path = 'Database.realm';

/**
 * Versión del esquema de la base de datos
 */
const schemaVersion = 1;

const RealmConfig: Realm.Configuration = {
  path,
  schema: [TaskModel.schema],
  schemaVersion,
};

export const realm = new Realm(RealmConfig);
