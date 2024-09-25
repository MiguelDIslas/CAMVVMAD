import {
  formatDate,
  formatTime,
  formatDateTime,
} from '@Formatters/Date.formatter';

describe('Date.formatter', () => {
  describe('formatDate', () => {
    it('Debe darle formato correctamente en zona horaria UTC', () => {
      const date = '2024-09-22T14:30:00Z';
      expect(formatDate(date)).toBe('September 22, 2024');
    });

    it('Debe darle formato correctamente en zona horaria UTC-5', () => {
      const date = '2024-09-22T14:30:00-05:00';
      expect(formatDate(date)).toBe('September 22, 2024');
    });

    it('Debe darle formato correctamente en zona horaria UTC-6', () => {
      const date = '2024-09-22T14:30:00-06:00';
      expect(formatDate(date)).toBe('September 22, 2024');
    });
  });

  describe('formatTime', () => {
    it('Debe darle formato correctamente en zona horaria UTC', () => {
      const date = '2024-09-22T14:30:00Z';
      expect(formatTime(date)).toBe('8:30 AM');
    });

    it('Debe darle formato correctamente en zona horaria UTC-5', () => {
      const date = '2024-09-22T14:30:00-05:00';
      expect(formatTime(date)).toBe('1:30 PM');
    });

    it('Debe darle formato correctamente en zona horaria UTC-6', () => {
      const date = '2024-09-22T14:30:00-06:00';
      expect(formatTime(date)).toBe('2:30 PM');
    });
  });

  describe('formatDateTime', () => {
    it('Debe darle formato correctamente en zona horaria UTC', () => {
      const date = '2024-09-22T14:30:00Z';
      expect(formatDateTime(date)).toBe('September 22, 2024 at 8:30 AM');
    });

    it('Debe darle formato correctamente en zona horaria UTC-5', () => {
      const date = '2024-09-22T14:30:00-05:00';
      expect(formatDateTime(date)).toBe('September 22, 2024 at 1:30 PM');
    });

    it('Debe darle formato correctamente en zona horaria UTC-6', () => {
      const date = '2024-09-22T14:30:00-06:00';
      expect(formatDateTime(date)).toBe('September 22, 2024 at 2:30 PM');
    });
  });
});
