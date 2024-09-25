import React from 'react';
import {Provider} from 'react-redux';
import {I18nextProvider} from 'react-i18next';
import {ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';

import store from '@Redux/Store';
import i18n from '@Language/i18n';
import {myTheme} from '@Themes/Theme';
import SafeArea from '@Components/Atoms/Layout/SafeArea';
import SplashScreen from '@Screens/Splash/Splash.Screen';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={myTheme}>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <NavigationContainer>
            <SafeArea>
              <SplashScreen />
            </SafeArea>
          </NavigationContainer>
        </Provider>
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
