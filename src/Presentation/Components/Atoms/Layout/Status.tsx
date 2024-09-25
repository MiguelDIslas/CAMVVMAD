import {StatusBar} from 'react-native';
import styled from 'styled-components/native';

type StatusProps = {
  /**
   * Color de fondo del StatusBar
   */
  backgroundColor?: string;
};

/**
 * Componente que renderiza un StatusBar con un color de fondo personalizado.
 */
const Status = styled(StatusBar)<StatusProps>`
  background-color: ${props =>
    props.backgroundColor || props.theme.colors.darker};
`;

export default Status;
