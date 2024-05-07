import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getThemeVariantColours from '../../theme/helpers/getThemeVariantColours';
import { ColourVariant } from '../../theme/theme.types';
import MinimalMenuContext from '../MinimalMenu/MinimalMenu.context';
import zIndexConstants from '../../constants/zIndex.constants';

const FloatingButton = styled(motion.button)<{ variant: ColourVariant; offsetBottom: boolean }>`
  position: fixed;
  bottom: ${(props) => (props.offsetBottom ? '76px' : '20px')};
  right: 20px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${(props) => getThemeVariantColours(props.variant, props.theme).main};
  color: ${(props) => getThemeVariantColours(props.variant, props.theme).contrastText};
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  z-index: ${zIndexConstants.floatingActionButton};

  &:hover {
    background-color: ${(props) => getThemeVariantColours(props.variant, props.theme).darker};
  }
`;

interface FloatingActionButtonProps {
  icon: IconDefinition;
  onClick: () => void;
  variant?: ColourVariant;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ icon, onClick, variant = 'primary' }) => {
  const { menuExists, isMobile } = useContext(MinimalMenuContext);

  const variants = {
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <FloatingButton
      initial='visible'
      animate='visible'
      whileHover='hover'
      whileTap='tap'
      offsetBottom={menuExists && isMobile}
      variants={variants}
      onClick={onClick}
      variant={variant}
    >
      <FontAwesomeIcon icon={icon} />
    </FloatingButton>
  );
};

export default FloatingActionButton;
