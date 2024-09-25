import styled from 'styled-components/native';

/**
 * Componente de texto para títulos
 */
const Title = styled.Text`
  font-size: ${props => props.theme.fontSize.l};
  color: ${props => props.theme.colors.black};
`;

export default Title;
