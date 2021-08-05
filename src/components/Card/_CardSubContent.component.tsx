import React from 'react';
import styled from 'styled-components';

export interface CardSubContentProps {
  children: React.ReactNode;
}

const ContentInner = styled.div`
  padding: 0 16px;

  &:first-child {
    padding-top: 16px;
  }

  &:last-child {
    padding-bottom: 16px;
  }

  font-family: ${(props) => props.theme.fonts.default.family};
  font-weight: ${(props) => props.theme.fonts.default.weight};
  font-size: ${(props) => props.theme.fonts.default.size};
  color: ${(props) => props.theme.colours.secondaryFont};
`;

const CardSubContent = ({ children }: CardSubContentProps) => {
  return <ContentInner>{children}</ContentInner>;
};

export default CardSubContent;
