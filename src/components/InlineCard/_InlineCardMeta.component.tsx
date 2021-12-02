import React from 'react';
import styled from 'styled-components';

export interface InlineCardMetaProps {
  children: React.ReactNode;
}

const ContentContainer = styled.div`
  height: 100%;
  padding: 8px;
  margin-left: 32px;

  display: flex;
  align-items: center;
  margin-left: auto;
`;

const InlineCardMeta = ({ children }: InlineCardMetaProps) => {
  return <ContentContainer>{children}</ContentContainer>;
};

export default InlineCardMeta;
