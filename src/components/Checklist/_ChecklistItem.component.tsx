import React from 'react';
import { motion } from 'framer-motion';
import styled, { useTheme } from 'styled-components';
import { Checkmark } from '../common/Checkmark.component';
import { Status } from '../../theme/theme.types';
import getThemeStatusColour from '../../theme/helpers/getThemeStatusColour';

interface OuterLabelProps {
  checked: boolean;
  $status?: Status;
}

const Outerlabel = styled(motion.label)<OuterLabelProps>`
  position: relative;
  margin-bottom: 4px;
  padding: 4px;

  display: flex;
  align-items: center;

  font-size: ${(props) => props.theme.fonts.default.size};
  font-family: ${(props) => props.theme.fonts.default.family};
  font-weight: ${(props) => props.theme.fonts.default.weight};
  color: ${(props) => (props.checked ? props.theme.colours.defaultBorder : props.theme.colours.defaultFont)};

  background-color: ${(props) => props.theme.colours.background};
  border-left: 3px solid transparent;

  transition: border-color 0.3s ease-in-out;

  user-select: none;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const Spacer = styled.div`
  width: 8px;
`;

interface StrikethroughProps {
  large: boolean;
}

const Strikethrough = styled.div<StrikethroughProps>`
  position: absolute;
  color: transparent;
  height: 1px;

  margin-left: ${(props) => (props.large ? '42px' : '30px')};
  padding-right: 2px;
  padding-left: 2px;
  background-color: ${(props) => props.theme.colours.defaultBorder};
`;

export interface ChecklistItemProps {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
  large: boolean;
  status?: Status;
}

const ChecklistItem = ({ label, value, onChange, large, status }: ChecklistItemProps) => {
  const theme = useTheme();
  const statusColour = status ? getThemeStatusColour(status, theme) : null;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      onChange(true);
    } else {
      onChange(false);
    }
  };

  return (
    <Outerlabel
      checked={value}
      $status={status}
      style={{
        borderLeftColor: statusColour?.main ?? 'transparent',
      }}
      whileHover={{ backgroundColor: theme.colours.cardBackground }}
      data-testid={value ? 'checklist-item-checked' : 'checklist-item'}
      data-highlight={status ?? undefined}
    >
      <Checkmark checked={value} large={large} />
      <Spacer />
      {label}
      <HiddenCheckbox type='checkbox' checked={value} onChange={handleChange} />
      {value && <Strikethrough large={large}>{label}</Strikethrough>}
    </Outerlabel>
  );
};

export default ChecklistItem;
