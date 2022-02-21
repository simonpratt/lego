import React from 'react';
import { useIsScreenSize } from '../../responsive/responsive';
import MobileMinimalMenuPage from './mobile/_MobileMinimalMenuPage.component';
import DesktopMinimalMenuPage from './desktop/_DesktopMinimalMenuPage.component';

export interface MinimalMenuPageProps {
  children: React.ReactNode;
}

const MinimalMenuPage = ({ children }: MinimalMenuPageProps) => {
  const isMobile = useIsScreenSize('mobile');

  if (isMobile) {
    return <MobileMinimalMenuPage>{children}</MobileMinimalMenuPage>;
  }

  return <DesktopMinimalMenuPage>{children}</DesktopMinimalMenuPage>;
};

export default MinimalMenuPage;
