import React from 'react';
import styled from 'styled-components';
import { Button, Spacer, SubHeading, Text } from '../..';

const ActionMessageContainer = styled.div`
  width: 100%;
  padding: 64px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export interface ActionMessageProps {
  header: string;
  info?: string;
  action?: string;
  onAction?: () => void;
}

const ActionMessage = ({ header, info, action, onAction }: ActionMessageProps) => {
  return (
    <ActionMessageContainer>
      <div>
        <SubHeading>{header}</SubHeading>
      </div>
      {info && (
        <>
          <Spacer size='1x' />
          <Text>{info}</Text>
        </>
      )}
      {action && (
        <>
          <Spacer size='4x' />
          <Button onClick={onAction}>{action}</Button>
        </>
      )}
    </ActionMessageContainer>
  );
};

export default ActionMessage;
