import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useRef } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { mobileMenuDefaultTransition } from './_MobileMenu.constants';
import MobileMenuBumpContext from './_MobileMenuBump.context';

const ItemContainer = styled.div`
  position: relative;

  color: ${(props) => props.theme.colours.defaultFont};
  cursor: pointer;

  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const iconContainerVariants = {
  active: { fontSize: '28px', y: -8 },
};

export interface MobileMinimalMenuItemProps {
  'icon'?: IconProp;
  'active'?: boolean;
  'onClick'?: () => void;
  'data-cy'?: string;
}

const MobileMinimalMenuItem = ({ icon, active, onClick, 'data-cy': dataCy }: MobileMinimalMenuItemProps) => {
  const { width } = useWindowDimensions();
  const { setBumpX } = useContext(MobileMenuBumpContext);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active && width > 0) {
      const left = itemRef.current?.offsetLeft;
      const center = left ? left + 48 / 2 : undefined;
      setBumpX(center);
    }

    return () => {
      if (active) {
        setBumpX(undefined);
      }
    };
  }, [active, setBumpX, width]);

  return (
    <ItemContainer onClick={onClick} ref={itemRef} data-cy={dataCy || 'menu-item'}>
      {icon && (
        <motion.div
          animate={active ? 'active' : undefined}
          style={{ fontSize: '20px' }}
          variants={iconContainerVariants}
          transition={mobileMenuDefaultTransition}
        >
          <FontAwesomeIcon icon={icon} />
        </motion.div>
      )}
    </ItemContainer>
  );
};

export default MobileMinimalMenuItem;
