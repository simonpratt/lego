import { AnimatePresence, motion } from 'framer-motion';
import React, { SyntheticEvent, useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import CardContext from './Card.context';

const actionsHeight = 32;

const ActionsContainer = styled(motion.div)`
  display: flex;
  padding: 0 8px;

  cursor: default;
`;

const ActionContainer = styled.div`
  height: ${actionsHeight}px;
  width: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.colours.defaultFont};
  background-color: ${(props) => props.theme.colours.cardBackground};
  padding: 4px;
  border-radius: 4px 4px 0 0;

  box-shadow: ${props => props.theme.shadows.xlarge};

  margin-right: 8px;
  cursor: pointer;
`;

export interface CardActionsProps {
  children: React.ReactNode;
}

export const CardActions = ({ children }: CardActionsProps) => {
  const { actionsRef, showActions, setHasActions } = useContext(CardContext);

  useEffect(() => {
    setHasActions(true);

    return () => {
      setHasActions(false);
    }
  }, [setHasActions])

  if (!showActions) {
    return null;
  }

  if (!actionsRef) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      <ActionsContainer
        key={'actions-container'}
        initial={{ y: actionsHeight }}
        animate={{ y: 0 }}
        exit={{ y: actionsHeight }}
        transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
      >
        {children}
      </ActionsContainer>
    </AnimatePresence>,
    actionsRef,
  );
};

export interface CardActionProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const CardAction = ({ children, onClick }: CardActionProps) => {
  const handleClick = (e: SyntheticEvent) => {
    (e as any).isActionClick = true;

    if (onClick) {
      onClick();
    }
  };

  return (
    <ActionContainer onClick={handleClick}>
      {children}
    </ActionContainer>
  );
};
