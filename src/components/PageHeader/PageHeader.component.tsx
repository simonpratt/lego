import React from 'react';
import styled from 'styled-components';
import { Heading } from '../..';

const HeaderOuter = styled.div`
  width: 100%;
  padding: 32px;
`;

export interface PageHeaderProps {
  heading: string;
}

const PageHeader = ({ heading }: PageHeaderProps) => {
  return (
    <HeaderOuter>
      <Heading>{heading}</Heading>
    </HeaderOuter>
  );
};

export default PageHeader;
