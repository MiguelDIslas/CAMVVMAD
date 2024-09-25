import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native';

/**
 * Componente de loading
 */
const Loading = styled(ActivityIndicator).attrs({
  size: 'small',
})`
  color: ${props => props.theme.colors.orange};
`;

export default Loading;
