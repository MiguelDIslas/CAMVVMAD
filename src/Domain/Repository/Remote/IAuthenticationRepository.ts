import {AuthRequestDTO} from '../../DTO/Auth/AuthRequest.dto';
import {AuthResponseDTO} from '../../DTO/Auth/AuthResponse.dto';

/**
 * Interfaz para el repositorio de autenticación
 */
export interface IAuthenticationRepository {
  /**
   * Método para iniciar sesión
   * @param authRequest Objeto con las credenciales del usuario
   */
  login(authRequest: AuthRequestDTO): Promise<AuthResponseDTO>;
}
