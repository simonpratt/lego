import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { mobileMenuDefaultTransition } from './_MobileMenu.constants';
import MobileMenuBump from './_MobileMenuBump.component';
import MobileMenuBumpContext from './_MobileMenuBump.context';

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
  const [bumpX, setBumpX] = useState<number | undefined>(0);

  return (
    <MobileMenuBumpContext.Provider value={{ setBumpX }}>
      <MobileMinimalMenuOuter>{children}</MobileMinimalMenuOuter>
    </MobileMenuBumpContext.Provider>
  );
};

export default MobileMinimalMenuContainer;
