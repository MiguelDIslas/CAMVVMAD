import {SafeAreaView, StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {isAndroid} from '@Helpers/Platform.helper';

type SafeAreaProps = {
  /**
   * Color de fondo del SafeAreaView
   */
  backgroundColor?: string;
};

/**
 * Componente que renderiza un SafeAreaView con un color de fondo personalizado. 
 * Si es Android, se toma en cuenta el StatusBar.
 */
const SafeArea = styled(SafeAreaView)<SafeAreaProps>`
  flex: 1;
  background-color: ${props =>
    props.backgroundColor || props.theme.colors.darker};
  padding-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;

export default SafeArea;
