import React from 'react';
import {render} from '@testing-library/react-native';
import {ThemeProvider} from 'styled-components/native';

import {myTheme} from '@Themes/Theme';
import SafeArea from '@Components/Atoms/Layout/SafeArea';

describe('SafeArea', () => {
  it('Debe retornar los colores por defecto, un background obscuro y texto claro', () => {
    const {toJSON} = render(
      <ThemeProvider theme={myTheme}>
        <SafeArea testID="safe-area" />
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
    expect(toJSON()).toHaveStyle({backgroundColor: myTheme.colors.darker});
  });


  it('Debe retornar los colores personalizados, un background claro y texto obscuro', () => {
    const {toJSON} = render(
      <ThemeProvider theme={myTheme}>
        <SafeArea
          testID="safe-area"
          backgroundColor={myTheme.colors.orange}
        />
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
    expect(toJSON()).toHaveStyle({backgroundColor: myTheme.colors.orange});
  });

});
