import {PropsWithChildren} from 'react';
import styled from 'styled-components/native';

interface Props extends PropsWithChildren<{}> {
  isCentered?: boolean;
}

const Container = styled.View<Props>`
  flex: 1;
  padding: ${props => props.theme.spacing.m};
  align-items: ${props => (props.isCentered ? 'center' : 'flex-start')};
  justify-content: ${props => (props.isCentered ? 'center' : 'flex-start')};
`;

export default Container;
