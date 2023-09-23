import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
import { motion } from 'framer-motion';
import styled, { useTheme } from 'styled-components';
import getThemeControlColours from '../../theme/helpers/getThemeControlColours';

export const OptionsContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colours.controlBackground};
  z-index: 10000;

  box-shadow: ${(props) => props.theme.shadows.small};
`;

export const Option = styled(motion.div)`
  color: ${(props) => getThemeControlColours(props.theme).font};
  background-color: ${(props) => props.theme.colours.controlBackgroundDisabled};
  display: flex;
  align-items: center;
  cursor: pointer;

  min-height: 36px;
  padding: 6px 12px;
`;

export type SelectOption = {
  value: string;
  label: string;
};

export interface SelectOptionsProps {
  options: SelectOption[];
  onSelect: (value: string) => void;
}

export const SelectOptions = ({ options, onSelect }: SelectOptionsProps) => {
  const theme = useTheme();

  return (
    <OptionsContainer>
      {options.map((option) => (
        <Option
          whileHover={{ backgroundColor: theme.colours.controlBorder }}
          transition={{ type: 'spring', duration: 0.2 }}
          key={option.value}
          onClick={() => onSelect(option.value)}
        >
          {option.label}
        </Option>
      ))}
    </OptionsContainer>
  );
};

export interface SelectOptionsPopperProps {
  referenceElement: any;
  options: SelectOption[];
  onSelect: (value: string) => void;
  onClose: () => void;
}

export const OptionsPopper = ({ referenceElement, options, onSelect, onClose }: SelectOptionsPopperProps) => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement>();
  const { styles, attributes } = usePopper(referenceElement, popperElement, { placement: 'bottom-start' });

  const handleGlobalClick = useCallback(
    (event: MouseEvent) => {
      if (!popperElement?.contains(event.target as any)) {
        onClose();
      }
    },
    [onClose, popperElement],
  );

  useEffect(() => {
    document.addEventListener('mouseup', handleGlobalClick);

    return () => {
      document.removeEventListener('mouseup', handleGlobalClick);
    };
  }, [handleGlobalClick, popperElement]);

  return ReactDOM.createPortal(
    <div
      ref={setPopperElement as any}
      style={{ ...styles.popper, zIndex: 999, width: referenceElement?.offsetWidth }}
      {...attributes.popper}
    >
      <SelectOptions options={options} onSelect={onSelect} />
    </div>,
    document.querySelector('body') as any,
  );
};
