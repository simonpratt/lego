import React from 'react';
import styled from 'styled-components';

export interface InlineCardMediaProps {
  children: React.ReactNode;
}

const MediaContainer = styled.div`
  width: 128px;
  min-width: 128px;
  height: 64px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InlineCardMedia = ({ children }: InlineCardMediaProps) => {
  return <MediaContainer>{children}</MediaContainer>;
};

export default InlineCardMedia;
