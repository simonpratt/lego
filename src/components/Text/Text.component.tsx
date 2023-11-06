import React from 'react';
import styled from 'styled-components';

export type TextVariant = 'primary' | 'secondary';

const TextContainer = styled.span`
  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
  font-weight: ${(props) => props.theme.fonts.default.weight};

  color: ${(props) => props.theme.colours.defaultFont};
`;

const TextContainerSecondary = styled.span`
  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
  font-weight: ${(props) => props.theme.fonts.default.weight};

  color: ${(props) => props.theme.colours.secondaryFont};
`;

export interface TextProps {
  'children': React.ReactNode;
  'variant'?: TextVariant;
  'data-testid'?: string;
}

const Text = ({ children, variant = 'primary', 'data-testid': dataTestId }: TextProps) => {
  switch (variant) {
    case 'secondary':
      return <TextContainerSecondary data-testid={dataTestId}>{children}</TextContainerSecondary>;
    case 'primary':
    default:
      return <TextContainer data-testid={dataTestId}>{children}</TextContainer>;
  }
};

export default Text;
