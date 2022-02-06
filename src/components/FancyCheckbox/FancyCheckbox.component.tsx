import React from 'react';
import styled from 'styled-components';
import getThemeControlColours from '../../theme/helpers/getThemeControlColours';
import ButtonGroup from '../ButtonGroup/ButtonGroup.component';
import useFormNode from '../Form/useFormNode.hook';

interface StyledButtonProps {
  selected: boolean;
}

const FancyCheckboxLabel = styled.label`
  display: block;
  padding-bottom: 8px;

  color: ${(props) => getThemeControlColours(props.theme).font};
  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
`;

const StyledButton = styled.button<StyledButtonProps>`
  height: 128px;
  width: 128px;

  outline: none;
  box-shadow: none;
  border: none;

  cursor: pointer;

  padding: 0 24px;

  font-size: ${(props) => props.theme.fonts.default.size};
  font: ${(props) => props.theme.fonts.default.family};

  color: ${(props) =>
    props.selected ? props.theme.colours.primary.contrastText : props.theme.colours.tertiary.contrastText};
  background-color: ${(props) =>
    props.selected ? props.theme.colours.primary.main : props.theme.colours.tertiary.main};

  border-radius: 2px;

  &:hover {
    background-color: ${(props) =>
      props.selected ? props.theme.colours.primary.main : props.theme.colours.tertiary.hover};
  }
`;

interface Option {
  value: string | number;
  label: string;
}

export interface FancyCheckboxProps {
  name: string;
  label?: string;
  options: Option[];
  value?: string;
  onChange?: (value: any) => void;
}

const FancyCheckbox = ({ name, label, options, value, onChange }: FancyCheckboxProps) => {
  const { value: contextValue, onChange: contextOnChange } = useFormNode<string | number>(name);

  const handleChange = (_value: string | number) => {
    if (onChange) {
      onChange(_value);
    }

    if (contextOnChange) {
      contextOnChange(_value);
    }
  };

  const selectedValue = value || contextValue;

  return (
    <div>
      {label && <FancyCheckboxLabel htmlFor={name}>{label}</FancyCheckboxLabel>}
      <ButtonGroup>
        {options.map((option) => (
          <StyledButton
            selected={option.value === selectedValue}
            key={option.value}
            onClick={() => handleChange(option.value)}
          >
            {option.label}
          </StyledButton>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default FancyCheckbox;
