import React from 'react';
import styled from 'styled-components';

const PageOuter = styled.div`
  padding-bottom: 64px;
`;

export interface MobileMinimalMenuPageProps {
  children: React.ReactNode;
}

const MobileMinimalMenuPage = ({ children }: MobileMinimalMenuPageProps) => {
  return <PageOuter>{children}</PageOuter>;
};

export default MobileMinimalMenuPage;
