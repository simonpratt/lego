import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { ColourVariant } from '../../theme/theme.types';
import Button from '../Button/Button.component';

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
`;

export interface ActionMenuProps {
  variant?: ColourVariant;
}

const ActionMenu = ({ variant }: ActionMenuProps) => {
  return (
    <Button variant={variant}>
      <StyledIcon icon={faEllipsisV} />
    </Button>
  );
};

export default ActionMenu;
