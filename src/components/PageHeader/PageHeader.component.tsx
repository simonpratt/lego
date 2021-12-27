import React from 'react';
import styled from 'styled-components';
import { Heading } from '../..';

const HeaderOuter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: calc(100% - 64px);
  margin: 32px;
  min-height: 48px;
`;

export interface PageHeaderProps {
  heading: string;
  actions?: React.ReactNode;
}

const PageHeader = ({ heading, actions }: PageHeaderProps) => {
  return (
    <HeaderOuter>
      <Heading>{heading}</Heading>
      <div>{actions}</div>
    </HeaderOuter>
  );
};

export default PageHeader;
