import React from 'react';
import styled from 'styled-components';

const PageOuter = styled.div`
  padding-left: 64px;
`;

export interface DesktopMinimalMenuPageProps {
  children: React.ReactNode;
}

const DesktopMinimalMenuPage = ({ children }: DesktopMinimalMenuPageProps) => {
  return <PageOuter>{children}</PageOuter>;
};

export default DesktopMinimalMenuPage;
