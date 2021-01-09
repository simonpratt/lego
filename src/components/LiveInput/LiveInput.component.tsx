import React from 'react';
import styled from 'styled-components';
import useFormNode from '../Form/useFormNode.hook';

interface LiveInputProps {
  name: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input`
  height: 18px;
  font-size: 18px;
  background-color: transparent;

  border: none;
  outline: none;
  color: ${(props) => props.theme.colours.defaultFont};

  &::placeholder {
    color: ${(props) => props.theme.colours.controlPlaceholder};
  }
`;

const LiveInput = ({ name, type = 'text', placeholder, value, onChange }: LiveInputProps) => {
  const { value: contextValue, onChange: contextOnChange } = useFormNode(name);

  return (
    <div>
      <StyledInput
        name={name}
        type={type}
        value={value || contextValue}
        placeholder={placeholder}
        onChange={onChange || contextOnChange}
      />
    </div>
  );
};

export default LiveInput;
