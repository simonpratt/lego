import React from 'react';
import styled from 'styled-components';
import getThemeVariantColours from '../../theme/helpers/getThemeVariantColours';
import { ColourVariant } from '../../theme/theme.types';

export interface SquareButtonProps {
  'children': React.ReactChild;
  'variant'?: ColourVariant;
  'onClick'?: () => void;
  'data-testid'?: string;
}

interface StyledButtonProps {
  variant: ColourVariant;
}

const StyledButton = styled.button<StyledButtonProps>`
  height: 128px;
  width: 128px;

  outline: none;
  box-shadow: none;
  border: none;

  cursor: pointer;

  padding: 0 24px;

  font-size: ${(props) => props.theme.fonts.default.size};
  font: ${(props) => props.theme.fonts.default.family};

  color: ${(props) => getThemeVariantColours(props.variant, props.theme).contrastText};
  background-color: ${(props) => getThemeVariantColours(props.variant, props.theme).main};

  border-radius: 2px;

  &:hover {
    background-color: ${(props) => getThemeVariantColours(props.variant, props.theme).hover};
  }
`;

const SquareButton = ({ children, variant = 'primary', onClick, 'data-testid': dataTestId }: SquareButtonProps) => {
  return (
    <StyledButton variant={variant} onClick={onClick} data-testid={dataTestId || 'button'}>
      {children}
    </StyledButton>
  );
};

export default SquareButton;
