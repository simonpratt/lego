import React from 'react';
import styled from 'styled-components';
import getThemeVariantColours from '../../theme/helpers/getThemeVariantColours';
import { BadgeSpan, BadgeVariant } from '../Badge/Badge.component';

interface InteractiveBadgeProps {
  inactive: boolean;
}

const InteractiveBadge = styled(BadgeSpan)<InteractiveBadgeProps>`
  cursor: pointer;
  margin-bottom: 8px;

  ${(props) =>
    props.inactive &&
    `
    background-color: ${getThemeVariantColours('tertiary', props.theme).main};
    color: ${getThemeVariantColours('tertiary', props.theme).contrastText};
  `}
`;

const BadgeSelectorOuter = styled.div`
  display: flex;
  flex-wrap: wrap;

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
    <BadgeSelectorOuter data-cy='badge-selector'>
      {options.map((option) => (
        <InteractiveBadge
          key={option.value}
          variant={option.variant}
          inactive={!value.includes(option.value)}
          onClick={() => handleClick(option.value)}
          data-cy={value.includes(option.value) ? 'badge-selected' : 'badge'}
        >
          {option.name}
        </InteractiveBadge>
      ))}
    </BadgeSelectorOuter>
  );
};

export default BadgeSelector;
