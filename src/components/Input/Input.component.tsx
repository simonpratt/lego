// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React from 'react';
import styled from 'styled-components';
import getThemeControlColours from '../../theme/helpers/getThemeControlColours';

const InputLabel = styled.label`
  display: block;
  padding-bottom: 8px;

  color: ${(props) => getThemeControlColours(props.theme).font};
  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
`;

const StyledInput = styled.input`
  outline: none;
  box-shadow: none;

  width: 100%;
  height: 48px;
  padding: 0 12px;

  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};

  color: ${(props) => getThemeControlColours(props.theme).font};
  background-color: ${(props) => getThemeControlColours(props.theme).background};

  border: 1px solid ${(props) => getThemeControlColours(props.theme).border};
  border-radius: 2px;

  &:hover {
    border: 1px solid ${(props) => getThemeControlColours(props.theme).borderHover};
  }

  &:focus {
    border: 1px solid ${(props) => getThemeControlColours(props.theme).borderFocus};
  }

  &::placeholder {
    color: ${(props) => getThemeControlColours(props.theme).placeholder};
  }
`;

export interface IInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, name, placeholder, type, value, onChange }: IInputProps) => {
  return (
    <div>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <StyledInput type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
