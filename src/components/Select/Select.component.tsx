import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useState } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import ControlDescription from '../../shared/ControlDescription';
import ControlLabel from '../../shared/ControlLabel';
import { ControlStyles } from '../../shared/ControlStyles';
import getThemeControlColours from '../../theme/helpers/getThemeControlColours';
import useFormNode, { getValue } from '../Form/useFormNode.hook';
import { OptionsPopper, SelectOption } from '../common/Options.component';

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
  const [isOpen, setIsOpen] = useState(false);
  const [referenceElement, setReferenceElement] = useState<any>();
  const { label, name, description, placeholder, 'value': propsValue, 'data-cy': dataCy, options } = props;

  const { value: contextValue, onChange: contextOnChange } = useFormNode(name);

  const value = getValue(propsValue, contextValue);

  const splitDescription = description ? description.split('\\n').map((str) => str.trim()) : undefined;

  const handleSelect = (value: string) => {
    setIsOpen(false);
    if (contextOnChange) {
      contextOnChange(value);
    }
    if (props.onChange) {
      props.onChange(value);
    }
  };

  const valueLabel = value && options.find((o) => o.value === value)?.label;

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
        {isOpen && (
          <OptionsPopper
            referenceElement={referenceElement}
            options={options}
            onSelect={handleSelect}
            onClose={() => setIsOpen(false)}
          />
        )}
      </ControlOuter>

      {splitDescription && (
        <ControlDescription>
          {splitDescription.map((line, index) => (
            <Fragment key={index}>
              {index !== 0 && <br />}
              {line}
            </Fragment>
          ))}
        </ControlDescription>
      )}
    </div>
  );
};

export default Select;
