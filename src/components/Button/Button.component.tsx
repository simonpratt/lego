import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import getThemeVariantColours from '../../theme/helpers/getThemeVariantColours';
import { ColourVariant } from '../../theme/theme.types';
import ButtonContext, { ButtonContextProps } from './Button.context';

export interface ButtonProps {
  children: React.ReactChild;
  loading?: boolean;
  variant?: ColourVariant;
  type?: 'submit' | 'button';
  onClick?: () => void;
}

interface InternalButtonProps extends ButtonContextProps {
  variant: ColourVariant;
}

const StyledButton = styled.button<InternalButtonProps>`
  outline: none;
  box-shadow: none;
  border: none;

  cursor: pointer;

  padding: 0 24px;

  font-size: ${(props) => props.theme.fonts.default.size};
  font-family: ${(props) => props.theme.fonts.default.family};

  color: ${(props) => getThemeVariantColours(props.variant, props.theme).contrastText};
  background-color: ${(props) => getThemeVariantColours(props.variant, props.theme).main};

  border-radius: 2px;

  // Props defined by the context
  height: ${(props) => props.height || '48px'};
  width: ${(props) => props.width};
  align-self: ${(props) => props.alignSelf};
  margin-top: ${(props) => props.marginTop};

  &:hover {
    background-color: ${(props) => getThemeVariantColours(props.variant, props.theme).hover};
  }
`;

const spinAnimation = keyframes`
 0% { transform: rotate(0deg); }
 100% { transform: rotate(360deg); }
`;

const ButtonSpinner = styled.div<InternalButtonProps>`
  display: inline-block;
  width: 48px;
  height: 48px;

  &:after {
    content: ' ';
    display: block;
    width: 24px;
    height: 24px;
    margin: 10px;
    border-radius: 50%;
    border: 2px solid ${(props) => getThemeVariantColours(props.variant, props.theme).contrastText};
    border-color: ${(props) => getThemeVariantColours(props.variant, props.theme).contrastText} transparent
      ${(props) => getThemeVariantColours(props.variant, props.theme).contrastText} transparent;
    animation-name: ${spinAnimation};
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
  }
`;

const Button = React.forwardRef(function Button(props: ButtonProps, ref: any) {
  const { children, loading, variant = 'primary', type = 'button', onClick } = props;
  const { width, height, alignSelf, marginTop } = useContext(ButtonContext);

  return (
    <StyledButton
      ref={ref}
      width={width}
      height={height}
      alignSelf={alignSelf}
      marginTop={marginTop}
      variant={variant}
      type={type}
      onClick={onClick}
    >
      {loading ? <ButtonSpinner variant={variant} /> : children}
    </StyledButton>
  );
});

export default Button;
