import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import darkTheme from '../../theme/dark.theme';

const ToggleOuter = styled(motion.div)`
  width: 42px;
  height: 24px;
  border-radius: 12px;

  background-color: ${(props) => props.theme.colours.controlBackground};
  cursor: pointer;

  display: flex;
  align-items: center;
`;

const ToggleDot = styled(motion.div)`
  height: 16px;
  width: 16px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.colours.defaultFont};

  transform: translateX(4px);
`;

const toggleOuterVariants = {
  off: { backgroundColor: darkTheme.colours.controlBackground },
  on: { backgroundColor: darkTheme.colours.statusSuccess.dull },
};

const toggleDotVariants = {
  off: { transform: 'translateX(4px)' },
  on: { transform: 'translateX(22px)' },
};

export interface ToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

const Toggle = ({ value, onChange }: ToggleProps) => {
  return (
    <ToggleOuter
      animate={value ? 'on' : 'off'}
      variants={toggleOuterVariants}
      transition={{ type: 'spring', duration: 0.3 }}
      onClick={() => onChange(!value)}
      data-testid='toggle'
    >
      <ToggleDot
        animate={value ? 'on' : 'off'}
        variants={toggleDotVariants}
        transition={{ type: 'spring', duration: 0.3 }}
      />
    </ToggleOuter>
  );
};

export default Toggle;
