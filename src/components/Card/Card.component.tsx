import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styled, { useTheme } from 'styled-components';
import responsive from '../../responsive/responsive';
import CardContext, { CardSize } from './Card.context';
import { CardActions, CardAction } from './_CardActions.component';
import CardContent from './_CardContent.component';
import CardHeader from './_CardHeader.component';
import CardMedia from './_CardMedia.component';
import CardSpacer from './_CardSpacer.component';
import CardSubContent from './_CardSubContent.component';
import CardToggleSection from './_CardToggleSection.component';

export interface CardProps {
  'children': React.ReactNode;
  'size'?: CardSize;
  'padded'?: boolean;
  'onClick'?: () => void;
  'data-testid'?: string;
}

interface CardOuterProps {
  size: CardSize;
  padded?: boolean;
  usePointer?: boolean;
}

const CardActionsContainer = styled.div`
  position: absolute;
  top: -32px;
`;

const CardInner = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;

  background-color: ${(props) => props.theme.colours.cardBackground};
  box-shadow: ${(props) => props.theme.shadows.small};
`;

const CardOuter = styled(motion.div)<CardOuterProps>`
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

  &:hover {
    z-index: 1;
  }

  position: relative;
  cursor: ${(props) => (props.usePointer ? 'pointer' : 'default')};
  padding: ${(props) => (props.padded ? '16px' : 0)};
`;

const Card = ({ children, padded, size = 'sm', onClick, 'data-testid': dataTestId }: CardProps) => {
  const actionsRef = useRef<HTMLDivElement>(null);
  const [htmlActionsRef, setHtmlActionsRef] = useState<any>();
  const [showActions, setShowActions] = useState(false);
  const [hasActions, setHasActions] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    if (actionsRef.current) {
      setHtmlActionsRef(actionsRef.current);
    }
  }, [actionsRef]);

  const handleClick = (e: SyntheticEvent) => {
    if ((e as any).isActionClick) {
      return;
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <CardContext.Provider value={{ size, actionsRef: htmlActionsRef, showActions, setHasActions }}>
      <CardOuter
        onHoverStart={() => setShowActions(true)}
        onHoverEnd={() => setShowActions(false)}
        key={'actions-container'}
        transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
        whileHover={
          hasActions
            ? {
                scale: 1.005,
                boxShadow: theme.shadows.xlarge,
              }
            : {}
        }
        size={size}
        padded={padded}
        onClick={handleClick}
        usePointer={!!onClick}
        data-testid={dataTestId || 'card'}
      >
        <CardActionsContainer ref={actionsRef} />
        <CardInner>{children}</CardInner>
      </CardOuter>
    </CardContext.Provider>
  );
};

Card.ToggleSection = CardToggleSection;
Card.Actions = CardActions;
Card.Action = CardAction;
Card.Content = CardContent;
Card.SubContent = CardSubContent;
Card.Media = CardMedia;
Card.Spacer = CardSpacer;
Card.Header = CardHeader;

export default Card;
