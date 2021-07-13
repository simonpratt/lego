import React from 'react';
import styled from 'styled-components';

export interface InlineCardMediaProps {
  children: React.ReactNode;
}

const MediaContainer = styled.div`
  width: 128px;
  height: 64px;
`;

const InlineCardMedia = ({ children }: InlineCardMediaProps) => {
  return <MediaContainer>{children}</MediaContainer>;
};

export default InlineCardMedia;
