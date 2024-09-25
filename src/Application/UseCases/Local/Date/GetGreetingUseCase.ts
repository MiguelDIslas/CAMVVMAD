import {DateService} from '@Services/Local/Date.service';

/**
 * Caso de uso que devuelve un saludo dependiendo de la hora del día
 */
export class GetGreetingUseCase {
  /**
   * Método que devuelve un saludo dependiendo de la hora del día
   * @returns
   */
  static execute(): string {
    return DateService.getGreeting();
  }
}
