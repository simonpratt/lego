import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const ActionsContainer = styled.div``;

const ActionContainer = styled.div``;

const CardActions = () => {
  return (
    <ActionsContainer>
      <ActionContainer>
        <FontAwesomeIcon icon={faEdit} />
      </ActionContainer>
    </ActionsContainer>
  );
};

export default CardActions;
