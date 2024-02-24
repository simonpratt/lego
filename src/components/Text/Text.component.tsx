import React from 'react';
import styled from 'styled-components';

export type TextVariant = 'primary' | 'secondary';

interface TextPropsInternal {
  noWrap?: boolean;
}

const TextContainer = styled.span<TextPropsInternal>`
  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
  font-weight: ${(props) => props.theme.fonts.default.weight};

  color: ${(props) => props.theme.colours.defaultFont};

  ${(props) =>
    props.noWrap &&
    `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    max-width: 100%;
  `}
`;

const TextContainerSecondary = styled.span<TextPropsInternal>`
  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
  font-weight: ${(props) => props.theme.fonts.default.weight};

  color: ${(props) => props.theme.colours.secondaryFont};

  ${(props) =>
    props.noWrap &&
    `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    max-width: 100%;
  `}
`;

export interface TextProps {
  'children': React.ReactNode;
  'variant'?: TextVariant;
  'noWrap'?: boolean;
  'data-testid'?: string;
}

const Text = ({ children, variant = 'primary', noWrap, 'data-testid': dataTestId }: TextProps) => {
  switch (variant) {
    case 'secondary':
      return (
        <TextContainerSecondary noWrap={noWrap} data-testid={dataTestId}>
          {children}
        </TextContainerSecondary>
      );
    case 'primary':
    default:
      return (
        <TextContainer noWrap={noWrap} data-testid={dataTestId}>
          {children}
        </TextContainer>
      );
  }
};

export default Text;
