import React from 'react';
import styled from 'styled-components';

export interface CardContentProps {
  children: React.ReactNode;
}

const ContentInner = styled.div`
  padding: 0 16px;
  margin-bottom: 4px;

  &:first-child {
    padding-top: 16px;
  }

  &:last-child {
    padding-bottom: 16px;
    margin-bottom: 0;
  }

  font-family: ${(props) => props.theme.fonts.default.family};
  font-weight: ${(props) => props.theme.fonts.default.weight};
  font-size: ${(props) => props.theme.fonts.default.size};
  color: ${(props) => props.theme.colours.defaultFont};
`;

const CardContent = ({ children }: CardContentProps) => {
  return <ContentInner>{children}</ContentInner>;
};

export default CardContent;
