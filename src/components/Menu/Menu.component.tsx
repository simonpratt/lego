import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import responsive from '../../responsive/responsive';
import MenuContent from './_MenuContent.component';
import MenuHeading from './_MenuHeading.component';
import MenuItem from './_MenuItem.component';
import MenuPage from './_MenuPage.component';
import MenuPanel from './_MenuPanel.component';

const MenuDesktop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 250px;
  background-color: ${(props) => props.theme.colours.cardBackground};
  padding: 8px 0;

  ${responsive.useStylesFor('tablet').andSmaller(`
    display: none;
  `)}
`;

const MenuMobile = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  height: 64px;
  width: 100%;
  padding: 8px 0;

  ${responsive.useStylesFor('desktop').andLarger(`
    display: none;
  `)}
`;

const MobileMenuNavContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 100vh;
  width: 250px;

  padding: 8px 0;

  cursor: default;
  background-color: ${(props) => props.theme.colours.cardBackground};
`;

const MenuShadow = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  opacity: 0.7;

  background-color: ${(props) => props.theme.colours.cardBackground};
`;

interface AnimatedMenuShadowProps {
  onClick: () => void;
}

const AnimatedMenuShadow = ({ onClick }: AnimatedMenuShadowProps) => (
  <MenuShadow
    onClick={onClick}
    key={'mobile-menu-shadow'}
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.7 }}
    exit={{ opacity: 0 }}
    transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
  />
);

interface MobileMenuNavProps {
  children: React.ReactNode;
}

const MobileMenuNav = ({ children }: MobileMenuNavProps) => {
  return (
    <MobileMenuNavContainer
      key={'mobile-menu-nav'}
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
    >
      {children}
    </MobileMenuNavContainer>
  );
};

export interface MenuProps {
  children: React.ReactNode;
  heading: string;
}

const Menu = ({ children, heading }: MenuProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MenuDesktop>
        <MenuHeading>{heading}</MenuHeading>
        {children}
      </MenuDesktop>
      <MenuMobile>
        <MenuHeading onOpen={() => setOpen(true)}>{heading}</MenuHeading>
      </MenuMobile>
      <AnimatePresence>
        {open && (
          <>
            <MobileMenuNav>
              <MenuHeading isOpen={open} onClose={() => setOpen(false)}>
                {heading}
              </MenuHeading>
              {children}
            </MobileMenuNav>
            <AnimatedMenuShadow onClick={() => setOpen(false)} />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

Menu.Page = MenuPage;
// Menu.Heading = MenuHeading;
Menu.Item = MenuItem;
Menu.Content = MenuContent;
Menu.Panel = MenuPanel;

export default Menu;
