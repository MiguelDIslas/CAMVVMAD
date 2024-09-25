import styled from 'styled-components/native';

const Item = styled.TouchableOpacity`
  padding: ${props => props.theme.spacing.m};
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: ${props => props.theme.spacing.s};
  margin-bottom: ${props => props.theme.spacing.s};
`;

export default Item;
