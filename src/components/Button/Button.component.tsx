import React from 'react';
import styled, { keyframes } from 'styled-components';
import getThemeVariantColours from '../../theme/helpers/getThemeVariantColours';
import { IPropsWithTheme, ColourVariant } from '../../theme/theme.types';

export interface ButtonProps {
  children: React.ReactChild;
  fillWidth?: boolean;
  loading?: boolean;
  variant: ColourVariant;
  onClick: () => void;
}

interface InternalButtonProps extends IPropsWithTheme {
  variant: ColourVariant;
}

const StyledButton = styled.button<InternalButtonProps>`
  height: 48px;
  outline: none;
  box-shadow: none;
  border: none;

  padding: 0 24px;
  font-size: 14px;

  font: ${(props) => props.theme.fonts.default};

  color: ${(props) => getThemeVariantColours(props.variant, props.theme).font};
  background-color: ${(props) => getThemeVariantColours(props.variant, props.theme).background};

  border-radius: 2px;
  width: 100%;
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
    border: 2px solid ${(props) => getThemeVariantColours(props.variant, props.theme).font};
    border-color: ${(props) => getThemeVariantColours(props.variant, props.theme).font} transparent
      ${(props) => getThemeVariantColours(props.variant, props.theme).font} transparent;
    animation-name: ${spinAnimation};
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
  }
`;

const Button = ({ children, loading, variant = 'primary', onClick }: ButtonProps) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {loading ? <ButtonSpinner variant={variant} /> : children}
    </StyledButton>
  );
};

export default Button;
