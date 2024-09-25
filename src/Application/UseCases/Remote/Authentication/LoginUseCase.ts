import {AuthRequestDTO} from '@DTO/Auth/AuthRequest.dto';
import {AuthResponseDTO} from '@DTO/Auth/AuthResponse.dto';
import {AuthenticationService} from '@Services/Remote/Authentication.service';

/**
 * Caso de uso para iniciar sesión
 */
export class LoginUseCase {
  /**
   * Ejecución del caso de uso para iniciar sesión
   * @param credentials DTO con las credenciales del usuario
   * @returns Token de autenticación
   */
  static async execute(credentials: AuthRequestDTO): Promise<AuthResponseDTO> {
    return AuthenticationService.login(credentials);
  }
}
