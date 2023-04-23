import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import getThemeVariantColours from '../../theme/helpers/getThemeVariantColours';
import { ColourVariant } from '../../theme/theme.types';
import ButtonContext, { ButtonContextProps } from './Button.context';

export type ButtonSize = 'sm' | 'md';

export interface ButtonProps {
  'children': React.ReactChild;
  'loading'?: boolean;
  'variant'?: ColourVariant;
  'size'?: ButtonSize;
  'type'?: 'submit' | 'button';
  'onClick'?: () => void;
  'data-cy'?: string;
}

interface InternalButtonProps extends ButtonContextProps {
  variant: ColourVariant;
  size: ButtonSize;
}

const getButtonHeightPx = (size: ButtonSize) => {
  switch (size) {
    case 'sm':
      return '32px';
    case 'md':
      return '48px';
  }
};

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
  height: ${(props) => props.height || getButtonHeightPx(props.size)};
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
  width: ${(props) => getButtonHeightPx(props.size)};
  height: ${(props) => getButtonHeightPx(props.size)};

  &:after {
    content: ' ';
    display: block;
    width: ${(props) => (props.size === 'md' ? '24px' : '16px')};
    height: ${(props) => (props.size === 'md' ? '24px' : '16px')};
    margin: ${(props) => (props.size === 'md' ? '10px' : '6px')};
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
  const { children, loading, variant = 'primary', size = 'md', type = 'button', onClick, 'data-cy': dataCy } = props;
  const { width, height, alignSelf, marginTop } = useContext(ButtonContext);

  return (
    <StyledButton
      ref={ref}
      width={width}
      height={height}
      alignSelf={alignSelf}
      marginTop={marginTop}
      variant={variant}
      size={size}
      type={type}
      onClick={onClick}
      data-cy={dataCy || 'button'}
    >
      {loading ? <ButtonSpinner data-cy='button-loading-spinner' variant={variant} size={size} /> : children}
    </StyledButton>
  );
});

export default Button;
