import React from 'react';
import styled, { useTheme } from 'styled-components';
import colours from '../../colours/colours';
import getThemeStatusColour from '../../theme/helpers/getThemeStatusColour';
import { Status } from '../../theme/theme.types';

export interface NotificationProps {
  message: string;
  status?: Status;
  action?: string;
  onAction?: () => void;
}

interface NotificationContainerProps {
  colour: string;
}

const NotificationContainer = styled.div<NotificationContainerProps>`
  padding: 12px;
  background-color: white;

  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};

  border-left: solid 3px ${(props) => props.colour};
  box-shadow: 1px 1px 2px #0000000f;
`;

const MessageContainer = styled.div`
  color: ${(props) => props.theme.colours.defaultFont};
`;

const ActionContainer = styled.div`
  text-align: right;
  font-style: italic;

  cursor: pointer;

  color: ${colours.grey70};
  padding-top: 8px;
`;

const Alert = ({ message, status = 'info', action, onAction }: NotificationProps) => {
  const theme = useTheme();
  const colour = getThemeStatusColour(status, theme).main;

  return (
    <NotificationContainer colour={colour}>
      <MessageContainer>{message}</MessageContainer>
      {action && <ActionContainer onClick={onAction}>{action}</ActionContainer>}
    </NotificationContainer>
  );
};

export default Alert;
