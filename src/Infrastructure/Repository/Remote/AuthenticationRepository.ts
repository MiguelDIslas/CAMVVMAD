import {AuthRequestDTO} from '@DTO/Auth/AuthRequest.dto';
import {AuthResponseDTO} from '@DTO/Auth/AuthResponse.dto';
import {IAuthenticationRepository} from '@IRepository/Remote/IAuthenticationRepository';

/**
 * Repositorio para la autenticación de usuarios
 */
export class AuthenticationRepository implements IAuthenticationRepository {
  private endpoint = '/auth';

  async login(authRequest: AuthRequestDTO): Promise<AuthResponseDTO> {
    console.log(
      `El usuario ${authRequest.email} intentó iniciar sesión al endpoint ${this.endpoint}`,
    );

    if (
      authRequest.email === 'correo@gmail.com' &&
      authRequest.password === 'Prueba123#'
    ) {
      return {
        token: 'token',
      };
    }

    return {
      token: undefined,
    };
  }
}
