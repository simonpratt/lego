import React from 'react';
import { useIsScreenSize } from '../../responsive/responsive';
import MobileMinimalMenuItem from './mobile/_MobileMinimalMenuItem.component';
import DesktopMinimalMenuItem from './desktop/_DesktopMinimalMenuItem.component';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface MinimalMenuItemProps {
  icon?: IconProp;
  active?: boolean;
  onClick?: () => void;
}

const MinimalMenuItem = ({ icon, active, onClick }: MinimalMenuItemProps) => {
  const isMobile = useIsScreenSize('mobile');

  if (isMobile) {
    return <MobileMinimalMenuItem icon={icon} active={active} onClick={onClick} />;
  }

  return <DesktopMinimalMenuItem icon={icon} active={active} onClick={onClick} />;
};

export default MinimalMenuItem;
