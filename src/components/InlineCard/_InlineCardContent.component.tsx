import React from 'react';
import styled from 'styled-components';

export interface InlineCardContentProps {
  children: React.ReactNode;
}

const ContentContainer = styled.div`
  height: 100%;
  padding: 8px;

  font-family: ${(props) => props.theme.fonts.default.family};
  font-weight: ${(props) => props.theme.fonts.default.weight};
  font-size: ${(props) => props.theme.fonts.default.size};
  color: ${(props) => props.theme.colours.defaultFont};
`;

const InlineCardContent = ({ children }: InlineCardContentProps) => {
  return <ContentContainer>{children}</ContentContainer>;
};

export default InlineCardContent;
