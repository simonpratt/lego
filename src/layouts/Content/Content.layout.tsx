import React from 'react';
import styled from 'styled-components';

import ContentHeader from './_ContentHeader.component';

const ContentContainer = styled.div``;

const ContentContent = styled.div`
  padding: 16px;
`;

export interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <ContentContainer>
      <div>{children}</div>
      <div>meta</div>
    </ContentContainer>
  );
};

ContentLayout.Header = ContentHeader;
ContentLayout.Content = ContentContent;

export default ContentLayout;
