import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styled, { useTheme } from 'styled-components';
import ActionMenuContext from './ActionMenu.context';

const ActionMenuItemOuter = styled(motion.div)`
  display: flex;
  align-items: center;
  height: 42px;

  padding: 0px 16px;
  cursor: pointer;

  color: ${(props) => props.theme.colours.defaultFont};
  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
  font-weight: ${(props) => props.theme.fonts.default.weight};
`;

export interface ActionMenuItemProps {
  'children': React.ReactNode;
  'onClick': () => void;
  'data-cy'?: string;
}

const ActionMenuItem = ({ children, onClick, 'data-cy': dataCy }: ActionMenuItemProps) => {
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
        data-cy={dataCy || 'action-menu-item'}
      >
        {children}
      </ActionMenuItemOuter>
    </>
  );
};

export default ActionMenuItem;
