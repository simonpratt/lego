import React from 'react';
import styled, { useTheme } from 'styled-components';
import getThemeStatusColour from '../../theme/helpers/getThemeStatusColour';
import { Status } from '../../theme/theme.types';

export type AlertVariant = Status;

export interface AlertProps {
  variant: AlertVariant;
  message: string;
  count?: number;
  action?: string;
  onAction?: () => void;
}

interface AlertContainerProps {
  colour: string;
}

export const AlertContainer = styled.div<AlertContainerProps>`
  position: relative;
  padding: 12px;
  background-color: ${(props) => props.theme.colours.cardBackground};

  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
  font-weight: ${(props) => props.theme.fonts.default.weight};

  border-left: solid 3px ${(props) => props.colour};
  box-shadow: 1px 1px 2px #0000000f;
`;

const MessageContainer = styled.div`
  color: ${(props) => props.theme.colours.defaultFont};
`;

const ActionContainer = styled.div`
  text-align: right;
  font-style: italic;
  color: ${(props) => props.theme.colours.secondaryFont};

  cursor: pointer;
  padding-top: 8px;
`;

interface CountContainerProps {
  colour: string;
}

const CountContainer = styled.div<CountContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0px;
  right: -8px;

  font-size: 12px;
  color: ${(props) => props.theme.colours.defaultFont};
  font-family: ${(props) => props.theme.fonts.default.family};

  height: 24px;
  width: 24px;
  border: 2px solid ${(props) => props.colour};
  border-radius: 50%;
  background-color: ${(props) => props.theme.colours.cardBackground};
`;

const Alert = ({ variant, message, count, action, onAction }: AlertProps) => {
  const theme = useTheme();
  const colour = getThemeStatusColour(variant, theme).main;

  return (
    <AlertContainer colour={colour} data-testid='alert'>
      <MessageContainer data-testid='alert-message'>{message}</MessageContainer>
      {action && (
        <ActionContainer onClick={onAction} data-testid='alert-action'>
          {action}
        </ActionContainer>
      )}
      {count && count > 1 && <CountContainer colour={colour}>{count}</CountContainer>}
    </AlertContainer>
  );
};

export default Alert;
