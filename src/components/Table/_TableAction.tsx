import React, { useContext } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ColourVariant } from '../../theme/theme.types';
import Button from '../Button/Button.component';
import ButtonContext from '../Button/Button.context';

export interface TableActionProps {
  'text'?: string;
  'variant'?: ColourVariant;
  'icon'?: IconProp;
  'onClick': () => void;
  'data-cy'?: string;
}

const TableAction = ({ text, variant, icon, onClick, 'data-cy': dataCy }: TableActionProps) => {
  const buttonContextVal = useContext(ButtonContext);

  return (
    <ButtonContext.Provider value={{ ...buttonContextVal, ...(!text && icon && { width: '32px' }) }}>
      <Button variant={variant || 'tertiary'} icon={icon} onClick={onClick} data-cy={dataCy || 'button-table-action'}>
        {text}
      </Button>
    </ButtonContext.Provider>
  );
};

export default TableAction;
