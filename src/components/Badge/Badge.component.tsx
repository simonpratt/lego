import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styled from 'styled-components';
import getThemeStatusColour from '../../theme/helpers/getThemeStatusColour';
import { Status } from '../../theme/theme.types';

interface BadgeSpanProps {
  variant: BadgeVariant;
}

export const BadgeSpan = styled.span<BadgeSpanProps>`
  padding: 4px 8px;
  border-radius: 2px;
  display: inline-flex;
  align-items: center;

  background-color: ${(props) => getThemeStatusColour(props.variant, props.theme).main};
  color: ${(props) => getThemeStatusColour(props.variant, props.theme).contrast};

  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
  font-weight: ${(props) => props.theme.fonts.default.weight};
  line-height: ${(props) => props.theme.fonts.default.size};

  text-transform: lowercase;
`;

const TextSpan = styled.span`
  cursor: default;
`;

const ActionSpan = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 6px;
  margin: -4px -8px -4px 6px;
  cursor: pointer;
  user-select: none;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;

  background-color: rgba(0, 0, 0, 0.15);
  font-size: ${(props) => props.theme.fonts.default.size};

  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

export type BadgeVariant = Status;

export interface BadgeProps {
  children: React.ReactNode;
  variant: BadgeVariant;
  actionIcon?: IconProp;
  onAction?: (event: React.MouseEvent) => void;
}

const Badge = ({ children, variant, actionIcon, onAction }: BadgeProps) => {
  return (
    <BadgeSpan variant={variant} data-testid='badge'>
      <TextSpan>{children}</TextSpan>
      {actionIcon && (
        <ActionSpan onClick={onAction}>
          <FontAwesomeIcon icon={actionIcon} />
        </ActionSpan>
      )}
    </BadgeSpan>
  );
};

export default Badge;
