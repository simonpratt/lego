import React from 'react';
import styled from 'styled-components';

export interface InlineCardContentProps {
  children: React.ReactNode;
  center?: boolean;
}

const ContentContainer = styled.div<{ center?: boolean }>`
  height: 100%;
  padding: 8px;

  font-family: ${(props) => props.theme.fonts.default.family};
  font-weight: ${(props) => props.theme.fonts.default.weight};
  font-size: ${(props) => props.theme.fonts.default.size};
  color: ${(props) => props.theme.colours.defaultFont};

  ${(props) =>
    props.center &&
    `
      display: flex;
      align-items: center;

  `}
`;

const InlineCardContent = ({ children, center }: InlineCardContentProps) => {
  return <ContentContainer center={center}>{children}</ContentContainer>;
};

export default InlineCardContent;
