import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styled from 'styled-components';
import getThemeStatusColour from '../../theme/helpers/getThemeStatusColour';
import { Status } from '../../theme/theme.types';

interface BadgeSpanProps {
  variant: BadgeVariant;
  useHover: boolean;
}

export const BadgeSpan = styled.span<BadgeSpanProps>`
  padding: 4px 8px;
  border-radius: 2px;

  background-color: ${(props) => getThemeStatusColour(props.variant, props.theme).main};
  color: ${(props) => getThemeStatusColour(props.variant, props.theme).contrast};

  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
  font-weight: ${(props) => props.theme.fonts.default.weight};
  line-height: ${(props) => props.theme.fonts.default.size};

  text-transform: lowercase;

  &:hover {
    background-color: ${(props) => getThemeStatusColour(props.variant, props.theme).hover};
  }
`;

const ActionSpan = styled.span`
  vertical-align: middle;
  padding: 3px 7px;
  margin: -3px -7px -3px 0;
  cursor: pointer;
  user-select: none;

  font-size: ${(props) => props.theme.fonts.default.size};
`;

export type BadgeVariant = Status;

export interface BadgeProps {
  children: React.ReactNode;
  variant: BadgeVariant;
  actionIcon?: IconProp;
  onAction?: () => void;
}

const Badge = ({ children, variant, actionIcon, onAction }: BadgeProps) => {
  return (
    <BadgeSpan variant={variant} useHover={!!actionIcon} data-cy='badge'>
      {children}
      {actionIcon && (
        <ActionSpan onClick={onAction}>
          <FontAwesomeIcon icon={actionIcon} />
        </ActionSpan>
      )}
    </BadgeSpan>
  );
};

export default Badge;
