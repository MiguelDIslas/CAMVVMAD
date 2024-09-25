//Definición Principal para el tema de la aplicación en styled-components
import 'styled-components/native';

declare module 'styled-components/native' {
  export interface ThemeArgument {
    /**
     * Colores de la aplicación
     */
    colors: Colors;

    /**
     * Tamaño de espacios
     */
    spacing: Spacing;

    /**
     * Tamaño para textos
     */
    fontSize: FontSize;
  }

  export interface DefaultTheme extends ThemeArgument {}
}
