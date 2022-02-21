import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import { mobileMenuDefaultTransition } from './_MobileMenu.constants';
import MobileMenuBump from './_MobileMenuBump.component';
import MobileMenuBumpContext from './_MobileMenuBump.context';

const MobileMinimalMenuOuter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 48px;
  z-index: 10;

  display: flex;
  justify-content: space-evenly;

  background-color: ${(props) => props.theme.colours.cardBackground};
`;

const AnimatedMenuBumpContainer = styled(motion.div)`
  position: fixed;
  bottom: 46px;
  left: 0;

  width: 86px;
  height: 24px;

  svg {
    fill: ${(props) => props.theme.colours.cardBackground};
  }
`;

export interface MobileMinimalMenuContainerProps {
  children: React.ReactNode;
}

const MobileMinimalMenuContainer = ({ children }: MobileMinimalMenuContainerProps) => {
  const [bumpX, setBumpX] = useState<number | undefined>(0);

  return (
    <MobileMenuBumpContext.Provider value={{ setBumpX }}>
      <MobileMinimalMenuOuter>
        <AnimatedMenuBumpContainer
          animate={{ opacity: bumpX ? 1 : 0, x: bumpX ? bumpX - 86 / 2 : undefined, y: bumpX ? 0 : 100 }}
          transition={mobileMenuDefaultTransition}
        >
          <MobileMenuBump />
        </AnimatedMenuBumpContainer>
        {children}
      </MobileMinimalMenuOuter>
    </MobileMenuBumpContext.Provider>
  );
};

export default MobileMinimalMenuContainer;
