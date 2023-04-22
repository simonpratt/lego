import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styled, { useTheme } from 'styled-components';
import ActionMenuContext from './ActionMenu.context';

const ActionMenuItemOuter = styled(motion.div)`
  padding: 12px 16px;
  cursor: pointer;

  color: ${(props) => props.theme.colours.defaultFont};
  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
  font-weight: ${(props) => props.theme.fonts.default.weight};
`;

export interface ActionMenuItemProps {
  children: React.ReactNode;
  onClick: () => void;
}

const ActionMenuItem = ({ children, onClick }: ActionMenuItemProps) => {
  const theme = useTheme();
  const { closeActionMenu } = useContext(ActionMenuContext);

  const handleClick = () => {
    onClick();
    closeActionMenu();
  };

  return (
    <>
      <ActionMenuItemOuter
        style={{ backgroundColor: theme.colours.tertiary.main }}
        whileHover={{ backgroundColor: theme.colours.tertiary.hover }}
        onClick={handleClick}
        data-cy='action-menu-item'
      >
        {children}
      </ActionMenuItemOuter>
    </>
  );
};

export default ActionMenuItem;
