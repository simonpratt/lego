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
  children: React.ReactNode;
  variant?: TextVariant;
}

const Text = ({ children, variant = 'primary' }: TextProps) => {
  switch (variant) {
    case 'secondary':
      return <TextContainerSecondary>{children}</TextContainerSecondary>;
    case 'primary':
    default:
      return <TextContainer>{children}</TextContainer>;
  }
};

export default Text;
