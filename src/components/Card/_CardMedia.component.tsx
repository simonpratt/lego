import React, { useContext } from 'react';
import styled from 'styled-components';
import responsive from '../../responsive/responsive';

import CardContext, { CardSize } from './Card.context';

export interface CardMediaProps {
  children: React.ReactNode;
}

interface MediaContainerProps {
  size: CardSize;
}

const MediaContainer = styled.div<MediaContainerProps>`
  ${(props) => {
    switch (props.size) {
      case 'sm':
        return `
          height: 160px;
        `;
      case 'md':
        return `
          height: 260px;

          ${responsive.useStylesFor('mobile').andSmaller(`
            height: 160px;
          `)}
        `;
      case 'lg':
      default:
        return `
          height: 400px;

          ${responsive.useStylesFor('tablet').andSmaller(`
            height: 260px;
          `)}

          ${responsive.useStylesFor('mobile').andSmaller(`
            height: 160px;
          `)}
        `;
    }
  }}

  margin-bottom: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardMedia = ({ children }: CardMediaProps) => {
  const { size } = useContext(CardContext);

  return <MediaContainer size={size}>{children}</MediaContainer>;
};

export default CardMedia;
