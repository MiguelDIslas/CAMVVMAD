import i18n from '@Language/i18n';

/**
 * Servicio que contiene métodos relacionados con fechas
 */
export class DateService {
  /**
   * Método que devuelve un saludo dependiendo de la hora del día
   * @returns
   */
  static getGreeting(): string {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      return i18n.t('greeting.morning');
    } else if (hour >= 12 && hour < 19) {
      return i18n.t('greeting.afternoon');
    } else if (hour >= 19 && hour < 24) {
      return i18n.t('greeting.evening');
    } else {
      return i18n.t('greeting.night');
    }
  }
}
