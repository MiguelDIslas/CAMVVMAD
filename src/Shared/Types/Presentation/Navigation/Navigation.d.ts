type RootStackParamList = {
  /**
   * Pantalla de carga
   */
  Splash: undefined;

  /**
   * Pantalla de login
   */
  Login: undefined;

  /**
   * Pantalla de dashboard
   */
  Dashboard: undefined;

  /**
   * Pantalla de lista de tareas
   */
  TaskList: undefined;

  /**
   * Pantalla de creación de tareas
   */
  CreateTask: undefined;

  /**
   * Pantalla con parámetro
   */
  Parameter: {id: number};
};

type NavigationProps<T extends keyof RootStackParamList> = {
  navigation: {
    navigate: (screen: T, params?: RootStackParamList[T]) => void;
  };
};
