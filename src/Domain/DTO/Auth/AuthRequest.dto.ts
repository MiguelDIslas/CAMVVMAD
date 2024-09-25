/**
 * Objeto de transferencia de datos de autenticación
 */
export interface AuthRequestDTO {
  /**
   * Correo del usuario
   */
  email: string;

  /**
   * Contraseña del usuario
   */
  password: string;
}
