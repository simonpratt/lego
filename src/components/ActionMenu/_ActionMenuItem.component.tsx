import React from 'react';
import { motion } from 'framer-motion';
import styled, { useTheme } from 'styled-components';

const ActionMenuItemOuter = styled(motion.div)`
  padding: 12px 16px;
  cursor: pointer;

  color: ${(props) => props.theme.colours.defaultFont};
  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
  font-weight: ${(props) => props.theme.fonts.default.weight};
`;

export interface ActionMenuItemProps {
  label: string;
  onClick: () => void;
}

const ActionMenuItem = ({ label, onClick }: ActionMenuItemProps) => {
  const theme = useTheme();

  return (
    <>
      <ActionMenuItemOuter
        style={{ backgroundColor: theme.colours.tertiary.main }}
        whileHover={{ backgroundColor: theme.colours.tertiary.hover }}
        onClick={onClick}
        data-cy='action-menu-item'
      >
        {label}
      </ActionMenuItemOuter>
    </>
  );
};

export default ActionMenuItem;
