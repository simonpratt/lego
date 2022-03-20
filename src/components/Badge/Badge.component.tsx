import React from 'react';
import styled from 'styled-components';
import getThemeStatusColour from '../../theme/helpers/getThemeStatusColour';
import { Status } from '../../theme/theme.types';

interface BadgeSpanProps {
  variant: BadgeVariant;
}

export const BadgeSpan = styled.span<BadgeSpanProps>`
  padding: 4px 8px;
  border-radius: 2px;

  background-color: ${(props) => getThemeStatusColour(props.variant, props.theme).main};
  color: ${(props) => getThemeStatusColour(props.variant, props.theme).contrast};

  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
  font-weight: ${(props) => props.theme.fonts.default.weight};

  text-transform: lowercase;
`;

export type BadgeVariant = Status;

export interface BadgeProps {
  children: React.ReactNode;
  variant: BadgeVariant;
}

const Badge = ({ children, variant }: BadgeProps) => {
  return <BadgeSpan variant={variant}>{children}</BadgeSpan>;
};

export default Badge;
