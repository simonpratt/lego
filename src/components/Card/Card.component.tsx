import React from 'react';
import styled from 'styled-components';
import responsive from '../../responsive/responsive';
import CardContext, { CardSize } from './Card.context';
import CardContent from './_CardContent.component';
import CardMedia from './_CardMedia.component';
import CardSpacer from './_CardSpacer.component';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: CardSize;
  padded?: boolean;
}

interface CardOuterProps {
  size: CardSize;
  padded?: boolean;
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

  padding: ${(props) => (props.padded ? '16px' : 0)};
  background-color: ${(props) => props.theme.colours.cardBackground};
  box-shadow: ${(props) => props.theme.shadows.small};
`;

const Card = ({ children, padded, size = 'sm', ...props }: CardProps) => {
  return (
    <CardContext.Provider value={{ size }}>
      <CardOuter size={size} padded={padded} {...props}>
        {children}
      </CardOuter>
    </CardContext.Provider>
  );
};

Card.Content = CardContent;
Card.Media = CardMedia;
Card.Spacer = CardSpacer;

export default Card;
