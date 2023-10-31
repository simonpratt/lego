import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useIsScreenSize } from '../../responsive/responsive';
import DesktopMinimalMenuItem from './desktop/_DesktopMinimalMenuItem.component';
import MobileMinimalMenuItem from './mobile/_MobileMinimalMenuItem.component';

export interface MinimalMenuItemProps {
  'icon'?: IconProp;
  'active'?: boolean;
  'onClick'?: () => void;
  'data-testid'?: string;
}

const MinimalMenuItem = ({ icon, active, onClick, 'data-testid': dataTestId }: MinimalMenuItemProps) => {
  const isMobile = useIsScreenSize('mobile');

  if (isMobile) {
    return <MobileMinimalMenuItem icon={icon} active={active} onClick={onClick} data-testid={dataTestId} />;
  }

  return <DesktopMinimalMenuItem icon={icon} active={active} onClick={onClick} data-testid={dataTestId} />;
};

export default MinimalMenuItem;
