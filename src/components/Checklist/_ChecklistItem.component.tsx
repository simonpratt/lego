import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Outerlabel = styled(motion.label)`
  position: relative;
  margin-bottom: 12px;

  display: flex;
  align-items: center;

  font-size: ${(props) => props.theme.fonts.default.size};
  font-family: ${(props) => props.theme.fonts.default.family};
  font-weight: ${(props) => props.theme.fonts.default.weight};
  color: ${(props) => props.theme.colours.defaultFont};

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

const Checkmark = styled.div`
  position: relative;
  height: 24px;
  width: 24px;
  margin-right: 8px;
  background-color: ${(props) => props.theme.colours.cardBackground};

  &:after {
    content: '';
    position: absolute;
    display: none;

    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export interface ChecklistItemProps {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

const ChecklistItem = ({ label, value, onChange }: ChecklistItemProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked)
    if (event.target.checked) {
      onChange(true);
    } else {
      onChange(false);
    }
  };

  return (
    <Outerlabel>
      <Checkmark />
      {label} - {value ? 'true' : 'false'}
      <HiddenCheckbox type='checkbox' checked={value} onChange={handleChange} />
    </Outerlabel>
  );
};

export default ChecklistItem;
