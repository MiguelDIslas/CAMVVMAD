import styled from 'styled-components/native';

/**
 * Componente de texto para subtítulos
 */
const SubTitle = styled.Text`
  font-size: ${props => props.theme.fontSize.m};
  color: ${props => props.theme.colors.black};
`;

export default SubTitle;
