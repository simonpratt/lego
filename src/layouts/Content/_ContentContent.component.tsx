import React from 'react';
import styled from 'styled-components';
import responsive from '../../responsive/responsive';

export type ContentSize = 'sm' | 'md' | 'lg' | 'full';

const getWidth = (size: ContentSize) => {
  switch (size) {
    case 'sm':
      return responsive.getWidthFor('mobile');
    case 'md':
      return responsive.getWidthFor('tablet');
    case 'lg':
      return responsive.getWidthFor('desktop');
    case 'full':
    default:
      return 'calc(100% - 32px)';
  }
};

const ContentOuter = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;

interface ContentInnerProps {
  size: ContentSize;
}

const ContentInner = styled.div<ContentInnerProps>`
  width: ${(props) => getWidth(props.size)};
`;

export interface ContentContentActions {
  children: React.ReactNode;
  size?: ContentSize;
}

const ContentContent = ({ children, size = 'full' }: ContentContentActions) => {
  return (
    <ContentOuter>
      <ContentInner size={size}>{children}</ContentInner>
    </ContentOuter>
  );
};

export default ContentContent;
