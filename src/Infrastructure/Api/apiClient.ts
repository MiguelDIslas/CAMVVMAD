const API_BASE_URL = 'https://api_url';

/**
 * Cliente para realizar peticiones a la API
 */
const apiClient = {
  /**
   * Realiza una petición GET a la API
   * @param endpoint Endpoint al que se realizará la petición
   */
  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  },

  /**
   * Realiza una petición POST a la API
   * @param endpoint Endpoint al que se realizará la petición
   * @param body Cuerpo de la petición
   */
  async post<T>(endpoint: string, body: T): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  },
};

export default apiClient;
