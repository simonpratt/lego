import React from 'react';
import styled from 'styled-components';

const MobileMinimalMenuOuter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 56px;
  z-index: 10;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background-color: ${(props) => props.theme.colours.background};
`;

export interface MobileMinimalMenuContainerProps {
  children: React.ReactNode;
}

const MobileMinimalMenuContainer = ({ children }: MobileMinimalMenuContainerProps) => {
  return <MobileMinimalMenuOuter>{children}</MobileMinimalMenuOuter>;
};

export default MobileMinimalMenuContainer;
