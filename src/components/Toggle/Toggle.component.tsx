import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import darkTheme from '../../theme/dark.theme';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Label = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colours.defaultFont};
`;

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
  label?: string;
}

const Toggle = ({ value, onChange, label }: ToggleProps) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
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
    </Container>
  );
};

export default Toggle;
