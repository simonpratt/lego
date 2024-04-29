import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useRef } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { motion } from 'framer-motion';
import styled, { useTheme } from 'styled-components';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { mobileMenuDefaultTransition } from './_MobileMenu.constants';
import MobileMenuBumpContext from './_MobileMenuBump.context';
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
`

const TextDiv = styled.div`
  /* font-size: ${props => props.theme.fonts.emphasis.size}; */
  font-size: 11px;
  padding-top: 6px;
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
}: MobileMinimalMenuItemProps) => {
  const theme = useTheme();

  return (
    <ItemContainer onClick={onClick} data-testid={dataTestId || 'menu-item'}>
      {icon && (
        <MotionDivContainer
          animate={active ? 'active' : 'base'}
          variants={iconContainerVariants}
          transition={mobileMenuDefaultTransition}
        >
          <FontAwesomeIcon icon={icon} />
          <TextDiv>{label}</TextDiv>
        </MotionDivContainer>
      )}
    </ItemContainer>
  );
};

export default MobileMinimalMenuItem;
