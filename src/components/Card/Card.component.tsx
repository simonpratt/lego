import React from 'react';
import styled from 'styled-components';
import responsive from '../../responsive/responsive';
import CardContext, { CardSize } from './Card.context';
import CardContent from './_CardContent.component';
import CardMedia from './_CardMedia.component';
import CardSpacer from './_CardSpacer.component';

export interface CardProps {
  children: React.ReactNode;
  size: CardSize;
}

interface CardOuterProps {
  size: CardSize;
}

const CardOuter = styled.div<CardOuterProps>`
  ${(props) => {
    switch (props.size) {
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

  background-color: ${(props) => props.theme.colours.cardBackground};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
`;

const Card = ({ children, size }: CardProps) => {
  return (
    <CardContext.Provider value={{ size }}>
      <CardOuter size={size}>{children}</CardOuter>
    </CardContext.Provider>
  );
};

Card.Content = CardContent;
Card.Media = CardMedia;
Card.Spacer = CardSpacer;

export default Card;
