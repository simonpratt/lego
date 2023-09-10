import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import styled, { useTheme } from 'styled-components';
import ControlDescription from '../../shared/ControlDescription';
import ControlLabel from '../../shared/ControlLabel';
import { ControlStyles } from '../../shared/ControlStyles';
import getThemeControlColours from '../../theme/helpers/getThemeControlColours';
import useFormNode, { getValue } from '../Form/useFormNode.hook';

const ControlOuter = styled.div`
  position: relative;
`;

const SelectControl = styled.div`
  ${ControlStyles}
  cursor: pointer;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const IconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 48px;
  padding: 0 16px;
  display: flex;
  align-items: center;
`;

const PlaceholderText = styled.div`
  color: ${(props) => getThemeControlColours(props.theme).placeholder};
`;

const ValueText = styled.div`
  color: ${(props) => getThemeControlColours(props.theme).font};
`;

const OptionsContainer = styled.div`
  width: 100%;
  /* position: absolute; */
  background-color: ${(props) => props.theme.colours.controlBackground};
  z-index: 10000;

  box-shadow: ${(props) => props.theme.shadows.small};
`;

const Option = styled(motion.div)`
  color: ${(props) => getThemeControlColours(props.theme).font};
  background-color: ${(props) => props.theme.colours.controlBackgroundDisabled};
  height: 36px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
`;

export type SelectOption = {
  value: string;
  label: string;
};

export interface ISelectProps {
  'name'?: string;
  'label'?: string;
  'description'?: string;
  'placeholder'?: string;
  'value'?: string;
  'onChange'?: (value: any) => void;
  'data-cy'?: string;
  'options': SelectOption[];
}

const Select = (props: ISelectProps) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [referenceElement, setReferenceElement] = useState<any>();
  const [popperElement, setPopperElement] = useState<HTMLDivElement>();
  const { label, name, description, placeholder, 'value': propsValue, 'data-cy': dataCy, options } = props;

  const { value: contextValue, onChange: contextOnChange } = useFormNode(name);

  const { styles, attributes } = usePopper(referenceElement, popperElement, { placement: 'bottom-start' });

  const value = getValue(propsValue, contextValue);

  const splitDescription = description ? description.split('\\n').map((str) => str.trim()) : undefined;

  const selectValue = (option: SelectOption) => {
    setIsOpen(false);
    if (contextOnChange) {
      contextOnChange(option.value);
    }
    if (props.onChange) {
      props.onChange(option.value);
    }
  };

  const valueLabel = value && options.find((o) => o.value === value)?.label;

  const handleGlobalClick = useCallback(
    (event: MouseEvent) => {
      if (!popperElement?.contains(event.target as any)) {
        setIsOpen(false);
      }
    },
    [setIsOpen, popperElement],
  );

  useEffect(() => {
    document.addEventListener('mouseup', handleGlobalClick);

    return () => {
      document.removeEventListener('mouseup', handleGlobalClick);
    };
  }, [handleGlobalClick, popperElement]);

  return (
    <div>
      {label && <ControlLabel htmlFor={name}>{label}</ControlLabel>}
      <ControlOuter ref={setReferenceElement}>
        <SelectControl data-cy={dataCy} onClick={() => setIsOpen(!isOpen)}>
          <TextContainer>
            {!value && placeholder && <PlaceholderText>{placeholder}</PlaceholderText>}
            {value && <ValueText>{valueLabel}</ValueText>}
          </TextContainer>
          <IconContainer>
            <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
          </IconContainer>
        </SelectControl>
        {isOpen &&
          ReactDOM.createPortal(
            <div
              ref={setPopperElement as any}
              style={{ ...styles.popper, zIndex: 999, width: referenceElement?.offsetWidth }}
              {...attributes.popper}
            >
              <OptionsContainer>
                {options.map((option) => (
                  <Option
                    whileHover={{ backgroundColor: theme.colours.controlBorder }}
                    transition={{ type: 'spring', duration: 0.2 }}
                    key={option.value}
                    onClick={() => selectValue(option)}
                  >
                    {option.label}
                  </Option>
                ))}
              </OptionsContainer>
            </div>,
            document.querySelector('body') as any,
          )}
      </ControlOuter>

      {splitDescription && (
        <ControlDescription>
          {splitDescription.map((line, index) => (
            <>
              {index !== 0 && <br />}
              {line}
            </>
          ))}
        </ControlDescription>
      )}
    </div>
  );
};

export default Select;
