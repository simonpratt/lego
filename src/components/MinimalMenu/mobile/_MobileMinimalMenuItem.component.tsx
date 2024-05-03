import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { mobileMenuDefaultTransition } from './_MobileMenu.constants';
import darkTheme from '../../../theme/dark.theme';

const ItemContainer = styled.div`
  position: relative;

  cursor: pointer;

  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MotionDivContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 3px;
`;

const TextDiv = styled.div`
  font-size: 12px;
  padding-top: 6px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 22px;
`;

const iconContainerVariants = {
  base: { color: darkTheme.colours.defaultFont },
  active: { color: darkTheme.colours.primary.hover },
};

export interface MobileMinimalMenuItemProps {
  'icon'?: IconProp;
  'label': string;
  'active'?: boolean;
  'onClick'?: () => void;
  'data-testid'?: string;
}

const MobileMinimalMenuItem = ({
  icon,
  label,
  active,
  onClick,
  'data-testid': dataTestId,
}: MobileMinimalMenuItemProps) => (
  <ItemContainer onClick={onClick} data-testid={dataTestId || 'menu-item'}>
    {icon && (
      <MotionDivContainer
        animate={active ? 'active' : 'base'}
        variants={iconContainerVariants}
        transition={mobileMenuDefaultTransition}
      >
        <StyledIcon icon={icon} />
        <TextDiv>{label}</TextDiv>
      </MotionDivContainer>
    )}
  </ItemContainer>
);

export default MobileMinimalMenuItem;
