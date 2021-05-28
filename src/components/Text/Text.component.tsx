import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.span`
  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
  font-weight: ${(props) => props.theme.fonts.default.weight};

  color: ${(props) => props.theme.colours.defaultFont};
`;

export interface TextProps {
  children: React.ReactNode;
}

const Text = ({ children }: TextProps) => <TextContainer>{children}</TextContainer>;

export default Text;
