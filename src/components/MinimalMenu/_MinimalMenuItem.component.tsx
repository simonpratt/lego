import React from 'react';
import { useIsScreenSize } from '../../responsive/responsive';
import MobileMinimalMenuItem from './mobile/_MobileMinimalMenuItem.component';
import DesktopMinimalMenuItem from './desktop/_DesktopMinimalMenuItem.component';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface MinimalMenuItemProps {
  'icon'?: IconProp;
  'active'?: boolean;
  'onClick'?: () => void;
  'data-cy'?: string;
}

const MinimalMenuItem = ({ icon, active, onClick, 'data-cy': dataCy }: MinimalMenuItemProps) => {
  const isMobile = useIsScreenSize('mobile');

  if (isMobile) {
    return <MobileMinimalMenuItem icon={icon} active={active} onClick={onClick} data-cy={dataCy} />;
  }

  return <DesktopMinimalMenuItem icon={icon} active={active} onClick={onClick} data-cy={dataCy} />;
};

export default MinimalMenuItem;
