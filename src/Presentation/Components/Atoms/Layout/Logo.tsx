import styled from 'styled-components/native';
import logo from '@Assets/logo.png';

/**
 * Propiedades del componente
 */
type LogoProps = {
  /**
   * Ancho de la imagen
   */
  width?: number;

  /**
   * Alto de la imagen
   */
  height?: number;
};

/**
 * Componente de logo
 */
const Logo = styled.Image.attrs({
  source: logo,
})<LogoProps>`
  width: ${props => props.width || 100}px;
  height: ${props => props.height || 100}px;
`;

export default Logo;
