import React from 'react';
import styled from 'styled-components';
import useFormNode from '../Form/useFormNode.hook';

interface LiveInputProps {
  'name': string;
  'placeholder': string;
  'type'?: string;
  'value'?: string;
  'onChange'?: (value: string) => void;
  'data-cy'?: string;
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

const LiveInput = ({ name, type = 'text', placeholder, value, onChange, 'data-cy': dataCy }: LiveInputProps) => {
  const { value: contextValue, onChange: contextOnChange } = useFormNode(name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }

    if (contextOnChange) {
      contextOnChange(e.target.value);
    }
  };

  return (
    <div>
      <StyledInput
        name={name}
        type={type}
        value={value || contextValue}
        placeholder={placeholder}
        onChange={handleChange}
        data-cy={dataCy || 'live-input'}
      />
    </div>
  );
};

export default LiveInput;
