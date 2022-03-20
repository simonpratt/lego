import React from 'react';
import styled from 'styled-components';
import getThemeVariantColours from '../../theme/helpers/getThemeVariantColours';
import { BadgeSpan, BadgeVariant } from '../Badge/Badge.component';

interface InteractiveBadgeProps {
  inactive: boolean;
}

const InteractiveBadge = styled(BadgeSpan)<InteractiveBadgeProps>`
  cursor: pointer;

  ${(props) =>
    props.inactive &&
    `
    background-color: ${getThemeVariantColours('tertiary', props.theme).main};
    color: ${getThemeVariantColours('tertiary', props.theme).contrastText};
  `}
`;

const BadgeSelectorOuter = styled.div`
  ${InteractiveBadge} {
    margin-right: 8px;
  }
`;

export interface BadgeSelectorOption {
  value: string;
  name: string;
  variant: BadgeVariant;
}

export interface BadgeSelectorProps {
  options: BadgeSelectorOption[];
  value: string[];
  onChange: (val: string[]) => void;
}

const BadgeSelector = ({ options, value, onChange }: BadgeSelectorProps) => {
  const handleClick = (_value: string) => {
    onChange([_value]);
  };

  return (
    <BadgeSelectorOuter>
      {options.map((option) => (
        <InteractiveBadge
          key={option.value}
          variant={option.variant}
          inactive={!value.includes(option.value)}
          onClick={() => handleClick(option.value)}
        >
          {option.name}
        </InteractiveBadge>
      ))}
    </BadgeSelectorOuter>
  );
};

export default BadgeSelector;
