import {renderHook} from '@testing-library/react-hooks';
import useSplashViewModel from '@Screens/Splash/Splash.ViewModel';

describe('useSplashViewModel', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('should return loadingMessage from i18n', () => {
    const {result} = renderHook(() => useSplashViewModel());

    expect(result.current.loadingMessage).toBe('Cargando...');
  });

  it('should navigate to Login after 3 seconds', () => {
    const mockNavigate = jest.fn();
    jest
      .spyOn(require('@react-navigation/native'), 'useNavigation')
      .mockReturnValue({
        navigate: mockNavigate,
      });

    renderHook(() => useSplashViewModel());

    jest.runAllTimers();

    expect(mockNavigate).toHaveBeenCalledWith('Login');
  });
});
