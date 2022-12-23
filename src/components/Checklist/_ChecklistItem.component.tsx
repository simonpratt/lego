import React from 'react';
import { motion } from 'framer-motion';
import styled, { useTheme } from 'styled-components';

interface OuterLabelProps {
  checked: boolean;
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

interface CheckmarkProps {
  checked: boolean;
  large: boolean;
}

const Checkmark = styled.div<CheckmarkProps>`
  position: relative;
  height: ${(props) => (props.large ? '36px' : '24px')};
  width: ${(props) => (props.large ? '36px' : '24px')};
  margin-right: 8px;
  background-color: ${(props) => props.theme.colours.cardBackground};

  &:after {
    content: '';
    position: absolute;
    display: ${(props) => (props.checked ? 'block' : 'none')};

    left: ${(props) => (props.large ? '14px' : '9px')};
    top: ${(props) => (props.large ? '7px' : '5px')};
    width: ${(props) => (props.large ? '7px' : '5px')};
    height: ${(props) => (props.large ? '16px' : '10px')};
    border: solid ${(props) => props.theme.colours.defaultFont};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
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
}

const ChecklistItem = ({ label, value, onChange, large }: ChecklistItemProps) => {
  const theme = useTheme();
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
      whileHover={{ backgroundColor: theme.colours.cardBackground }}
      data-cy={value ? 'checklist-item-checked' : 'checklist-item'}
    >
      <Checkmark checked={value} large={large} />
      {label}
      <HiddenCheckbox type='checkbox' checked={value} onChange={handleChange} />
      {value && <Strikethrough large={large}>{label}</Strikethrough>}
    </Outerlabel>
  );
};

export default ChecklistItem;
