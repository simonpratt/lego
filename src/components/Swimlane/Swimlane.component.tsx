import React from 'react';
import styled from 'styled-components';
import { Heading } from '../..';

const SwimlaneOuter = styled.div`
  padding: 8px;
  margin: 0 16px;
  border-top: thin solid ${(props) => props.theme.colours.controlBorder};

  display: flex;
  align-items: center;

  :last-child {
    border-bottom: thin solid ${(props) => props.theme.colours.controlBorder};
  }
`;

const SwimlaneLabel = styled.div`
  padding-right: 32px;
  width: 240px;
  min-width: 240px;
`;

const SwimlaneContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export interface SwimlaneProps {
  label: string;
  children: React.ReactNode;
}

const Swimlane = ({ label, children }: SwimlaneProps) => {
  return (
    <SwimlaneOuter>
      <SwimlaneLabel>
        <Heading.FormHeading>{label}</Heading.FormHeading>
      </SwimlaneLabel>
      <SwimlaneContent>{children}</SwimlaneContent>
    </SwimlaneOuter>
  );
};

export default Swimlane;
