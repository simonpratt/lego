import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div``;

const ContentHeader = styled.div`
  padding: 16px;
`;

const ContentContent = styled.div`
  padding: 16px;
`;

export interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return <ContentContainer>{children}</ContentContainer>;
};

ContentLayout.Header = ContentHeader;
ContentLayout.Content = ContentContent;

export default ContentLayout;
