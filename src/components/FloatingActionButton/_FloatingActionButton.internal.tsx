import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getThemeVariantColours from '../../theme/helpers/getThemeVariantColours';
import { ColourVariant } from '../../theme/theme.types';
import MinimalMenuContext from '../MinimalMenu/MinimalMenu.context';
import zIndexConstants from '../../constants/zIndex.constants';
import FloatingActionButtonContext from './_FloatingActionButton.context';

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

interface FloatingActionButtonInternalProps {
  icon: IconDefinition;
  onClick: () => void;
  variant?: ColourVariant;
  'data-testid'?: string;
}

const FloatingActionButtonInternal = ({ icon, onClick, variant = 'primary', 'data-testid': dataTestId }: FloatingActionButtonInternalProps) => {
  const { menuExists, isMobile } = useContext(MinimalMenuContext);
  const { contextExists } = useContext(FloatingActionButtonContext);

  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, delay: 0.2 } },
    exit: { opacity: 0, scale: 0, transition: { duration: 0.3 } },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  return (
    <FloatingButton
      key='floating-button'
      initial={contextExists ? 'hidden' : 'visible'}
      animate='visible'
      exit='exit'
      whileHover='hover'
      whileTap='tap'
      offsetBottom={menuExists && isMobile}
      variants={variants}
      onClick={onClick}
      variant={variant}
      data-testid={dataTestId}
    >
      <FontAwesomeIcon icon={icon} />
    </FloatingButton>
  );
};

export default FloatingActionButtonInternal;
