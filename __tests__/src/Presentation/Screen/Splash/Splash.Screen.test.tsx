import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from '@Screens/Splash/Splash.Screen';
import useSplashViewModel from '@Screens/Splash/Splash.ViewModel';

import {myTheme} from '@Themes/Theme';
import {ThemeProvider} from 'styled-components/native';

jest.mock('@Screens/Splash/Splash.ViewModel');
describe('SplashScreen', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  beforeEach(() => {
    (useSplashViewModel as jest.Mock).mockReturnValue({
      loadingMessage: 'Cargando...',
    });
  });

  it('should render correctly', () => {
    const {getByText} = render(
      <NavigationContainer>
        <ThemeProvider theme={myTheme}>
          <SplashScreen />
        </ThemeProvider>
      </NavigationContainer>,
    );

    expect(getByText('Cargando...')).toBeTruthy();
  });

  it('should navigate to Login after 3 seconds', async () => {
    const mockNavigate = jest.fn();
    jest
      .spyOn(require('@react-navigation/native'), 'useNavigation')
      .mockReturnValue({
        navigate: mockNavigate,
      });

    render(
      <NavigationContainer>
        <ThemeProvider theme={myTheme}>
          <SplashScreen />
        </ThemeProvider>
      </NavigationContainer>,
    );

    await waitFor(
      () => {
        expect(mockNavigate).toHaveBeenCalledWith('Login');
      },
      {timeout: 4000},
    );
  });
});
