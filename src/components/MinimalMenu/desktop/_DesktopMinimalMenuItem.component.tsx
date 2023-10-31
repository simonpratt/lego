import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useMemo } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { motion } from 'framer-motion';
import styled, { useTheme } from 'styled-components';

const ItemContainer = styled(motion.div)`
  position: relative;

  color: ${(props) => props.theme.colours.defaultFont};
  font-size: 28px;
  cursor: pointer;

  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuIconBar = styled(motion.div)`
  position: absolute;
  top: 2px;
  left: 2px;

  height: 60px;
`;

const iconContainerVariants = {
  // hover: { x: 2 },
  active: { x: 2 },
  hoverActive: { x: 2 },
};

export interface DesktopMinimalMenuItemProps {
  'icon'?: IconProp;
  'active'?: boolean;
  'onClick'?: () => void;
  'data-testid'?: string;
}

const DesktopMinimalMenuItem = ({ icon, active, onClick, 'data-testid': dataTestId }: DesktopMinimalMenuItemProps) => {
  const theme = useTheme();

  const barVariants = useMemo(
    () => ({
      hover: { opacity: 1, backgroundColor: theme.colours.defaultBorder, width: 4 },
      active: { opacity: 1, backgroundColor: theme.colours.primary.main, width: 4 },
      hoverActive: { opacity: 1, backgroundColor: theme.colours.primary.main, width: 4 },
    }),
    [theme],
  );

  return (
    <ItemContainer
      whileHover={active ? 'hoverActive' : 'hover'}
      animate={active ? 'active' : undefined}
      onClick={onClick}
      data-testid={dataTestId || 'menu-item'}
    >
      <MenuIconBar
        style={{ backgroundColor: theme.colours.cardBackground, opacity: 0 }}
        variants={barVariants}
        transition={{ type: 'spring', duration: 0.3 }}
      />
      {icon && (
        <motion.div variants={iconContainerVariants}>
          <FontAwesomeIcon icon={icon} />
        </motion.div>
      )}
    </ItemContainer>
  );
};

export default DesktopMinimalMenuItem;
