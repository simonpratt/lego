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

const FAB_SIZES = {
  primary: {
    width: 56,
    height: 56,
    fontSize: 24,
    labelOffset: 68,
    hoverScale: 1.1,
    tapScale: 0.95,
  },
  mini: {
    width: 40,
    height: 40,
    fontSize: 18,
    labelOffset: 52,
    hoverScale: 1.15,
    tapScale: 0.9,
  },
} as const;

type FabSize = keyof typeof FAB_SIZES;

interface FabContainerProps {
  bottom?: number;
  offsetBottom?: boolean;
}

const FabContainer = styled(motion.div)<FabContainerProps>`
  position: fixed;
  bottom: ${(props) => {
    if (props.bottom !== undefined) return `${props.bottom}px`;
    return props.offsetBottom ? '76px' : '20px';
  }};
  right: 20px;
  z-index: ${zIndexConstants.floatingActionButton};
`;

interface FabButtonProps {
  variant: ColourVariant;
  size: FabSize;
}

const FabButton = styled(motion.button)<FabButtonProps>`
  width: ${(props) => FAB_SIZES[props.size].width}px;
  height: ${(props) => FAB_SIZES[props.size].height}px;
  border-radius: 50%;
  background-color: ${(props) => getThemeVariantColours(props.variant, props.theme).main};
  color: ${(props) => getThemeVariantColours(props.variant, props.theme).contrastText};
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => FAB_SIZES[props.size].fontSize}px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: ${(props) => getThemeVariantColours(props.variant, props.theme).darker};
  }
`;

const FabLabel = styled(motion.div)<{ size: FabSize }>`
  position: absolute;
  right: ${(props) => FAB_SIZES[props.size].labelOffset}px;
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

interface BaseFabProps {
  'icon': IconDefinition;
  'onClick': () => void;
  'variant'?: ColourVariant;
  'label'?: string;
  'size': FabSize;
  'bottom'?: number;
  'offsetBottom'?: boolean;
  'staggerDelay'?: number;
  'data-testid'?: string;
}

const BaseFab = ({
  icon,
  onClick,
  variant = 'primary',
  label,
  size,
  bottom,
  offsetBottom,
  staggerDelay = 0,
  'data-testid': dataTestId,
}: BaseFabProps) => {
  const [showLabel, setShowLabel] = React.useState(false);
  const { contextExists } = useContext(FloatingActionButtonContext);

  const sizeConfig = FAB_SIZES[size];

  const variants = {
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
    hover: { scale: sizeConfig.hoverScale },
    tap: { scale: sizeConfig.tapScale },
  };

  const labelVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <FabContainer
      bottom={bottom}
      offsetBottom={offsetBottom}
      initial={contextExists ? 'hidden' : 'visible'}
      animate='visible'
      exit='exit'
      variants={variants}
      onHoverStart={() => setShowLabel(true)}
      onHoverEnd={() => setShowLabel(false)}
    >
      <FabButton
        animate='visible'
        whileHover='hover'
        whileTap='tap'
        variants={variants}
        onClick={onClick}
        variant={variant}
        size={size}
        data-testid={dataTestId}
      >
        <FontAwesomeIcon icon={icon} />
      </FabButton>

      {label && (
        <AnimatePresence>
          {showLabel && (
            <FabLabel
              size={size}
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
    </FabContainer>
  );
};

interface FloatingActionButtonInternalProps {
  'icon': IconDefinition;
  'onClick': () => void;
  'variant'?: ColourVariant;
  'data-testid'?: string;
  'label'?: string;
}

const FloatingActionButtonInternal = (props: FloatingActionButtonInternalProps) => {
  const { menuExists, isMobile } = useContext(MinimalMenuContext);
  const { contextExists } = useContext(FloatingActionButtonContext);

  return (
    <BaseFab {...props} size='primary' offsetBottom={menuExists && isMobile} staggerDelay={contextExists ? 0.2 : 0} />
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

const MiniFabInternal = ({ bottom, staggerDelay, ...rest }: MiniFabInternalProps) => {
  return <BaseFab {...rest} size='mini' bottom={bottom} staggerDelay={staggerDelay} />;
};

export default FloatingActionButtonInternal;
export { MiniFabInternal };
