import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
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

const MiniFabContainer = styled(motion.div)<{ bottom: number }>`
  position: fixed;
  bottom: ${(props) => props.bottom}px;
  right: 20px;
  z-index: ${zIndexConstants.floatingActionButton};
`;

const MiniFabButton = styled(motion.button)<{ variant: ColourVariant }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => getThemeVariantColours(props.variant, props.theme).main};
  color: ${(props) => getThemeVariantColours(props.variant, props.theme).contrastText};
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: ${(props) => getThemeVariantColours(props.variant, props.theme).darker};
  }
`;

const FabLabel = styled(motion.div)`
  position: absolute;
  right: 52px;
  top: 50%;
  transform: translateY(-50%);

  padding: 6px 12px;
  border-radius: 4px;

  background-color: ${(props) => props.theme.colours.tertiary.main};
  color: ${(props) => props.theme.colours.defaultFont};

  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
  font-weight: ${(props) => props.theme.fonts.default.weight};

  white-space: nowrap;
  pointer-events: none;
  box-shadow: ${(props) => props.theme.shadows.medium};
`;

interface FloatingActionButtonInternalProps {
  'icon': IconDefinition;
  'onClick': () => void;
  'variant'?: ColourVariant;
  'data-testid'?: string;
  'label'?: string;
}

const FloatingActionButtonInternal = ({
  icon,
  onClick,
  variant = 'primary',
  'data-testid': dataTestId,
  label,
}: FloatingActionButtonInternalProps) => {
  const { menuExists, isMobile } = useContext(MinimalMenuContext);
  const { contextExists } = useContext(FloatingActionButtonContext);
  const [showLabel, setShowLabel] = React.useState(false);

  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, delay: 0.2 } },
    exit: { opacity: 0, scale: 0, transition: { duration: 0.3 } },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  const labelVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
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
        onHoverStart={() => setShowLabel(true)}
        onHoverEnd={() => setShowLabel(false)}
      >
        <FontAwesomeIcon icon={icon} />
      </FloatingButton>
      {label && (
        <AnimatePresence>
          {showLabel && (
            <FabLabel
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={labelVariants}
              transition={{ type: 'spring', duration: 0.3 }}
              style={{
                position: 'fixed',
                bottom: menuExists && isMobile ? '88px' : '32px',
                right: '88px',
              }}
            >
              {label}
            </FabLabel>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

interface MiniFabInternalProps {
  'icon': IconDefinition;
  'onClick': () => void;
  'variant'?: ColourVariant;
  'label'?: string;
  'bottom': number;
  'staggerDelay': number;
  'data-testid'?: string;
}

const MiniFabInternal = ({
  icon,
  onClick,
  variant = 'primary',
  label,
  bottom,
  staggerDelay,
  'data-testid': dataTestId,
}: MiniFabInternalProps) => {
  const [showLabel, setShowLabel] = React.useState(false);
  const { contextExists } = useContext(FloatingActionButtonContext);

  const miniFabVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: staggerDelay,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.3,
        delay: staggerDelay,
      },
    },
    hover: { scale: 1.15 },
    tap: { scale: 0.9 },
  };

  const labelVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <MiniFabContainer
      bottom={bottom}
      initial={contextExists ? 'hidden' : 'visible'}
      animate='visible'
      exit='exit'
      variants={miniFabVariants}
      onHoverStart={() => setShowLabel(true)}
      onHoverEnd={() => setShowLabel(false)}
    >
      <MiniFabButton
        whileHover='hover'
        whileTap='tap'
        variants={miniFabVariants}
        onClick={onClick}
        variant={variant}
        data-testid={dataTestId}
      >
        <FontAwesomeIcon icon={icon} />
      </MiniFabButton>

      {label && (
        <AnimatePresence>
          {showLabel && (
            <FabLabel
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={labelVariants}
              transition={{ type: 'spring', duration: 0.3 }}
            >
              {label}
            </FabLabel>
          )}
        </AnimatePresence>
      )}
    </MiniFabContainer>
  );
};

export default FloatingActionButtonInternal;
export { MiniFabInternal };
