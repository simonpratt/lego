import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import MobileMenuBumpContext from './_MobileMenuBump.context';
import { mobileMenuDefaultTransition } from './_MobileMenu.constants';

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
  icon?: IconProp;
  active?: boolean;
  onClick?: () => void;
}

const MobileMinimalMenuItem = ({ icon, active, onClick }: MobileMinimalMenuItemProps) => {
  const { setBumpX } = useContext(MobileMenuBumpContext);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active) {
      const left = itemRef.current?.offsetLeft;
      const center = left ? left + 48 / 2 : undefined;
      setBumpX(center);
    }

    return () => {
      setBumpX(undefined);
    };
  }, [active, setBumpX]);

  return (
    <ItemContainer onClick={onClick} ref={itemRef}>
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
