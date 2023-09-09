import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styled, { keyframes } from 'styled-components';
import getThemeVariantColours from '../../theme/helpers/getThemeVariantColours';
import { ColourVariant } from '../../theme/theme.types';
import ButtonContext, { ButtonContextProps } from './Button.context';

export type ButtonSize = 'sm' | 'md';

export interface ButtonProps {
  'children'?: React.ReactNode;
  'loading'?: boolean;
  'variant'?: ColourVariant;
  'size'?: ButtonSize;
  'type'?: 'submit' | 'button';
  'icon'?: IconProp;
  'onClick'?: () => void;
  'data-cy'?: string;
}

interface InternalButtonProps extends ButtonContextProps {
  variant: ColourVariant;
  size: ButtonSize;
  iconOnly: boolean;
  noBackground?: boolean;
}

const getButtonHeightPx = (size: ButtonSize) => {
  switch (size) {
    case 'sm':
      return '32px';
    case 'md':
      return '48px';
  }
};

const getButtonPaddingPx = (size: ButtonSize) => {
  switch (size) {
    case 'sm':
      return '0 12px';
    case 'md':
      return '0 24px';
  }
};

const getIconContainerSizePx = (size: ButtonSize) => {
  switch (size) {
    case 'sm':
      return { width: '32px', height: '32px' };
    case 'md':
      return { width: '48px', height: '48px' };
  }
};

const IconOuter = styled.span<InternalButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => getThemeVariantColours(props.variant, props.theme).contrastText};
  background-color: ${(props) =>
    props.noBackground
      ? 'transparent'
      : props.iconOnly
      ? getThemeVariantColours(props.variant, props.theme).main
      : getThemeVariantColours(props.variant, props.theme).darker};

  height: ${(props) => props.height || getIconContainerSizePx(props.size).height};
  width: ${(props) => getIconContainerSizePx(props.size).width};
`;

const StyledButton = styled.button<InternalButtonProps>`
  outline: none;
  box-shadow: none;
  border: none;

  cursor: pointer;
  padding: 0;

  font-size: ${(props) => props.theme.fonts.default.size};
  font-family: ${(props) => props.theme.fonts.default.family};

  color: ${(props) =>
    getThemeVariantColours(props.noBackground ? 'secondary' : props.variant, props.theme).contrastText};
  background-color: ${(props) =>
    props.noBackground ? 'transparent' : getThemeVariantColours(props.variant, props.theme).main};

  border-radius: 2px;

  // Props defined by the context
  height: ${(props) => props.height || getButtonHeightPx(props.size)};
  width: ${(props) => props.width};
  align-self: ${(props) => props.alignSelf};
  margin-top: ${(props) => props.marginTop};

  &:hover {
    background-color: ${(props) =>
      props.noBackground ? 'transparent' : getThemeVariantColours(props.variant, props.theme).hover};

    ${IconOuter} {
      background-color: ${(props) =>
        props.iconOnly
          ? getThemeVariantColours(props.variant, props.theme).hover
          : getThemeVariantColours(props.variant, props.theme).darkerHover};
    }
  }
`;

const ButtonInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonTextContainer = styled.span<{ size: ButtonSize }>`
  padding: ${(props) => getButtonPaddingPx(props.size)};
`;

const spinAnimation = keyframes`
 0% { transform: rotate(0deg); }
 100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.span`
  padding: 0 24px;
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
  const {
    children,
    loading,
    variant = 'primary',
    size = 'md',
    type = 'button',
    icon,
    onClick,
    'data-cy': dataCy,
  } = props;
  const { width, height, alignSelf, marginTop, noBackground } = useContext(ButtonContext);

  return (
    <StyledButton
      ref={ref}
      width={width}
      height={height}
      alignSelf={alignSelf}
      marginTop={marginTop}
      noBackground={noBackground}
      variant={variant}
      size={size}
      type={type}
      onClick={onClick}
      data-cy={dataCy || 'button'}
      iconOnly={!children}
    >
      {loading ? (
        <SpinnerContainer>
          <ButtonSpinner data-cy='button-loading-spinner' variant={variant} size={size} iconOnly={!children} />
        </SpinnerContainer>
      ) : (
        <ButtonInner>
          {children && <ButtonTextContainer size={size}>{children}</ButtonTextContainer>}
          {icon && (
            <IconOuter noBackground={noBackground} variant={variant} size={size} height={height} iconOnly={!children}>
              <FontAwesomeIcon icon={icon} />
            </IconOuter>
          )}
        </ButtonInner>
      )}
    </StyledButton>
  );
});

export default Button;
