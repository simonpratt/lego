import React from 'react';
import styled from 'styled-components';

export interface CardContentProps {
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
`;

const CardContent = ({ children }: CardContentProps) => {
  return <ContentInner>{children}</ContentInner>;
};

export default CardContent;
