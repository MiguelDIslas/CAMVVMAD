import {AuthRequestDTO} from '@DTO/Auth/AuthRequest.dto';
import {AuthResponseDTO} from '@DTO/Auth/AuthResponse.dto';
import {AuthenticationRepository} from '@Repository/Remote/AuthenticationRepository';

/**
 * Servicio para la autenticación de usuarios
 */
export class AuthenticationService {
  private static remoteRepo = new AuthenticationRepository();

  /**
   * Método para iniciar sesión
   * @param authRequest Objeto con las credenciales del usuario
   * @returns Token de autenticación
   */
  static async login(authRequest: AuthRequestDTO): Promise<AuthResponseDTO> {
    return this.remoteRepo.login(authRequest);
  }
}
