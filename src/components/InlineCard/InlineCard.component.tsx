import React from 'react';
import styled from 'styled-components';
import { responsive } from '../..';
import InlineCardContent from './_InlineCardContent.component';
import InlineCardMedia from './_InlineCardMedia.component';
import InlineCardMeta from './_InlineCardMeta.component';

export type InlineCardSize = 'fill' | 'xs' | 'sm' | 'md' | 'lg';

interface CardOuterProps {
  usePointer: boolean;
  size?: InlineCardSize;
}

const CardOuter = styled.div<CardOuterProps>`
  height: 64px;
  width: 100%;
  display: flex;

  cursor: ${(props) => (props.usePointer ? 'pointer' : '')};

  background-color: ${(props) => props.theme.colours.cardBackground};
  box-shadow: ${(props) => props.theme.shadows.small};

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

export interface InlineCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: InlineCardSize;
}

const InlineCard = ({ children, size, onClick }: InlineCardProps) => {
  return (
    <CardOuter size={size} usePointer={!!onClick} onClick={onClick}>
      {children}
    </CardOuter>
  );
};

InlineCard.Media = InlineCardMedia;
InlineCard.Content = InlineCardContent;
InlineCard.Meta = InlineCardMeta;

export default InlineCard;
