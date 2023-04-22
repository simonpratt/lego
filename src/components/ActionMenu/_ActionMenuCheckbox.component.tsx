import React from 'react';
import { motion } from 'framer-motion';
import styled, { useTheme } from 'styled-components';
import { Checkmark } from '../common/Checkmark.component';

const ActionMenuCheckboxOuter = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 42px;

  padding: 0px 16px;
  cursor: pointer;

  color: ${(props) => props.theme.colours.defaultFont};
  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
  font-weight: ${(props) => props.theme.fonts.default.weight};
`;

const Spacer = styled.div`
  width: 16px;
`;

export interface ActionMenuCheckboxProps {
  children: React.ReactNode;
  checked: boolean;
  onClick: () => void;
}

const ActionMenuCheckbox = ({ children, checked, onClick }: ActionMenuCheckboxProps) => {
  const theme = useTheme();

  return (
    <>
      <ActionMenuCheckboxOuter
        style={{ backgroundColor: theme.colours.tertiary.main }}
        whileHover={{ backgroundColor: theme.colours.tertiary.hover }}
        onClick={onClick}
        data-cy='action-menu-item'
      >
        {children}
        <Spacer />
        <Checkmark checked={checked} large={false} />
      </ActionMenuCheckboxOuter>
    </>
  );
};

export default ActionMenuCheckbox;
