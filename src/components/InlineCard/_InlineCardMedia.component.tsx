import React from 'react';
import styled from 'styled-components';

export type InlineCardMediaVariant = 'rectangle' | 'square';

export interface InlineCardMediaProps {
  children: React.ReactNode;
  variant?: InlineCardMediaVariant;
}

const getMediaWidth = (variant: InlineCardMediaVariant) => {
  switch (variant) {
    case 'square':
      return '64px';
    case 'rectangle':
    default:
      return '128px';
  }
};

const MediaContainer = styled.div<{ variant: InlineCardMediaVariant }>`
  width: ${(props) => getMediaWidth(props.variant)};
  min-width: ${(props) => getMediaWidth(props.variant)};
  height: 64px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InlineCardMedia = ({ children, variant = 'rectangle' }: InlineCardMediaProps) => {
  return <MediaContainer variant={variant}>{children}</MediaContainer>;
};

export default InlineCardMedia;
