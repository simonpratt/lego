// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React from 'react';
import styled from 'styled-components';
import { IPropsWithTheme } from '../../theme/theme.types';
import getThemeControlColours from '../../theme/helpers/getThemeControlColours';

const InputContainer = styled.div<IPropsWithTheme>`
  font-family: ${(props) => props.theme.fonts.default};
  padding: 8px 0;
`;

const InputLabel = styled.label<IPropsWithTheme>`
  display: block;
  padding-bottom: 8px;

  color: ${(props) => getThemeControlColours(props.theme).font};
`;

const StyledInput = styled.input<IPropsWithTheme>`
  outline: none;
  box-shadow: none;

  width: 100%;
  height: 48px;
  padding: 0 12px;

  font-size: 16px;
  color: ${(props) => getThemeControlColours(props.theme).font};

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
  label: string;
  name: string;
  placeholder?: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, name, placeholder, type, value, onChange }: IInputProps) => {
  return (
    <InputContainer>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <StyledInput type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    </InputContainer>
  );
};

export default Input;
