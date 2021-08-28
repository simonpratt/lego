import React from 'react';
import styled from 'styled-components';

import ContentHeader from './_ContentHeader.component';
import ContentContent from './_ContentContent.component';

const ContentContainer = styled.div``;

export interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return <ContentContainer>{children}</ContentContainer>;
};

ContentLayout.Header = ContentHeader;
ContentLayout.Content = ContentContent;

export default ContentLayout;
