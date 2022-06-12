import { motion, PanInfo, useMotionValue, useTransform } from 'framer-motion';
import React, { useContext, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import useMeasure from 'react-use-measure';

import { responsive } from '../..';
import getThemeStatusColour from '../../theme/helpers/getThemeStatusColour';
import { Status } from '../../theme/theme.types';
import InlineCardContent from './_InlineCardContent.component';
import InlineCardMedia from './_InlineCardMedia.component';
import InlineCardMeta from './_InlineCardMeta.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InlineCardSelectionContext from './_InlineCardSelection.context';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export type InlineCardSize = 'fill' | 'xs' | 'sm' | 'md' | 'lg';
export type DragVariant = Status;

interface CardWrapperProps {
  size?: InlineCardSize;
}
interface CardOuterProps {
  usePointer: boolean;
}

const CardWrapper = styled.div<CardWrapperProps>`
  position: relative;
  height: 64px;

  ${(props) => {
    switch (props.size) {
      case 'fill':
        return `
          width: 100%;
        `;
      case 'xs':
        return `
          width: 360px;
          ${responsive.useStylesFor('mobile').andSmaller(`
            width: 100%;
          `)}
        `;
      case 'sm':
        return `
          width: ${responsive.getWidthFor('mobile')};
          ${responsive.useStylesFor('mobile').andSmaller(`
            width: 100%;
          `)}
        `;
      case 'md':
        return `
          width: ${responsive.getWidthFor('tablet')};
          ${responsive.useStylesFor('tablet').andSmaller(`
            width: 100%;
          `)}
        `;
      case 'lg':
      default:
        return `
          width: ${responsive.getWidthFor('desktop')};
          ${responsive.useStylesFor('desktop').andSmaller(`
            width: 100%;
          `)}
        `;
    }
  }}
`;

const CardOuter = styled(motion.div)<CardOuterProps>`
  height: 64px;
  width: 100%;
  display: flex;

  cursor: ${(props) => (props.usePointer ? 'pointer' : '')};

  background-color: ${(props) => props.theme.colours.cardBackground};
  box-shadow: ${(props) => props.theme.shadows.small};
`;

const CardActionBackground = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px;
  padding-right: 16px;

  top: 0;
  left: 0;
  pointer-events: none;
`;

const SelectChecked = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 0;
  height: 0;

  border-bottom: 48px solid transparent;
  border-right: 48px solid ${(props) => props.theme.colours.statusInfo.main};
`;

const SelectIconContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;

  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-left: 16px;
  padding-bottom: 16px;

  color: ${(props) => props.theme.colours.statusInfo.contrast};
`;

export interface InlineCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: InlineCardSize;
  value?: string;

  gestureLeftIcon?: IconProp;
  gestureLeftVariant?: DragVariant;
  onGestureLeft?: () => void;
}

const InlineCard = ({
  children,
  size,
  value,
  onClick,
  gestureLeftIcon,
  gestureLeftVariant,
  onGestureLeft,
}: InlineCardProps) => {
  const { value: selectedValues, onToggle } = useContext(InlineCardSelectionContext);
  const isSelectable = !!onToggle;
  const isSelected = selectedValues?.length && value && selectedValues.includes(value);

  const theme = useTheme();
  const x = useMotionValue(0);
  const [ref, bounds] = useMeasure();
  const xInput = [-50, 0];
  const gestureLeftTheme = getThemeStatusColour(gestureLeftVariant || 'info', theme);

  const [gestureLeftActivated, setGestureLeftActivated] = useState(false);

  const opacity = useTransform(x, xInput, ['1', '0']);

  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, panInfo: PanInfo) => {
    // approx xInputMin * 3
    if (panInfo.offset.x < -180 && onGestureLeft) {
      setGestureLeftActivated(true);
      onGestureLeft();
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(e);
    }

    if (onToggle && value) {
      onToggle(value);
    }
  };

  return (
    <CardWrapper size={size}>
      <CardActionBackground style={{ opacity, backgroundColor: gestureLeftTheme.main }}>
        {gestureLeftIcon && (
          <FontAwesomeIcon style={{ fontSize: '20px', color: gestureLeftTheme.contrast }} icon={gestureLeftIcon} />
        )}
      </CardActionBackground>
      <CardOuter
        drag={onGestureLeft ? 'x' : undefined}
        onDragEnd={handleDragEnd}
        ref={ref}
        style={{ x }}
        animate={{ x: gestureLeftActivated ? -bounds.width : undefined, opacity: gestureLeftActivated ? 0 : undefined }}
        dragConstraints={{ left: 0, right: 0 }}
        usePointer={!!onClick || isSelectable}
        onClick={handleClick}
        data-cy='inline-card'
      >
        {children}
      </CardOuter>
      {isSelectable && isSelected ? (
        <SelectChecked>
          <SelectIconContainer>
            <FontAwesomeIcon icon={faCheck} />
          </SelectIconContainer>
        </SelectChecked>
      ) : null}
    </CardWrapper>
  );
};

InlineCard.Media = InlineCardMedia;
InlineCard.Content = InlineCardContent;
InlineCard.Meta = InlineCardMeta;

export default InlineCard;
