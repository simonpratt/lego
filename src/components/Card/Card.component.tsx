import React, { useRef } from 'react';
import styled from 'styled-components';
import responsive from '../../responsive/responsive';
import CardContext, { CardSize } from './Card.context';
import CardActions from './_CardActions.component';
import CardContent from './_CardContent.component';
import CardHeader from './_CardHeader.component';
import CardMedia from './_CardMedia.component';
import CardSpacer from './_CardSpacer.component';
import CardSubContent from './_CardSubContent.component';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: CardSize;
  padded?: boolean;
}

interface CardOuterProps {
  size: CardSize;
  padded?: boolean;
  usePointer?: boolean;
}

const CardActions = styled.div`
  width: 100%;
`;

const CardInner = styled.div`
  width: 100%;
`;

const CardOuter = styled.div<CardOuterProps>`
  ${(props) => {
    switch (props.size) {
      case 'fill':
        return `
          width: 100%;
        `;
      case 'xs':
        return `
          width: 240px;
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

  position: relative;

  cursor: ${(props) => (props.usePointer ? 'pointer' : 'default')};

  padding: ${(props) => (props.padded ? '16px' : 0)};
  background-color: ${(props) => props.theme.colours.cardBackground};
  box-shadow: ${(props) => props.theme.shadows.small};
`;

const Card = ({ children, padded, size = 'sm', onClick, ...props }: CardProps) => {
  const actionsRef = useRef(null);

  return (
    <CardContext.Provider value={{ size, actionsRef: actionsRef.current }}>
      <CardOuter size={size} padded={padded} onClick={onClick} usePointer={!!onClick} {...props}>
        <CardActions ref={actionsRef} />
        <CardInner>{children}</CardInner>
      </CardOuter>
    </CardContext.Provider>
  );
};

Card.Actions = CardActions;
Card.Content = CardContent;
Card.SubContent = CardSubContent;
Card.Media = CardMedia;
Card.Spacer = CardSpacer;
Card.Header = CardHeader;

export default Card;
