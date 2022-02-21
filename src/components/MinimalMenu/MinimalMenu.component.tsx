import React from 'react';
import { useIsScreenSize } from '../../responsive/responsive';
import DesktopMinimalMenuContainer from './desktop/_DesktopMinimalMenuContainer.component';
import MobileMinimalMenuContainer from './mobile/_MobileMinimalMenuContainer.component';
import MinimalMenuItem from './_MinimalMenuItem.component';
import MinimalMenuPage from './_MinimalMenuPage.component';

export interface MinimalMenuProps {
  children: React.ReactNode;
}

const MinimalMenu = ({ children }: MinimalMenuProps) => {
  const isMobile = useIsScreenSize('mobile');

  if (isMobile) {
    return <MobileMinimalMenuContainer>{children}</MobileMinimalMenuContainer>;
  }

  return <DesktopMinimalMenuContainer>{children}</DesktopMinimalMenuContainer>;
};

MinimalMenu.Item = MinimalMenuItem;
MinimalMenu.Page = MinimalMenuPage;

export default MinimalMenu;