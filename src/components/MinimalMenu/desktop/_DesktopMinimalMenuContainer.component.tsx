import React from 'react';
import styled from 'styled-components';

const DesktopMinimalMenuOuter = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 64px;
  height: 100%;
  z-index: 10;

  background-color: ${(props) => props.theme.colours.cardBackground};
`;

export interface DesktopMinimalMenuContainerProps {
  children: React.ReactNode;
}

const DesktopMinimalMenuContainer = ({ children }: DesktopMinimalMenuContainerProps) => {
  return <DesktopMinimalMenuOuter>{children}</DesktopMinimalMenuOuter>;
};

export default DesktopMinimalMenuContainer;
