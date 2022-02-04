import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { StyledInput } from '../Input/Input.component';
import { FocusContext } from './_FocusContext';

const InputContainer = styled.div`
  padding: 2px 0;
`;

interface LiveListRowProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
}

const LiveListRow = ({ id, value, onChange }: LiveListRowProps) => {
  const { onFocus, onBlur, registerFocusable, deregisterFocusable } = useContext(FocusContext);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    registerFocusable(id, () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }

      return () => {
        deregisterFocusable(id);
      };
    });
  }, [id, registerFocusable, deregisterFocusable]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <InputContainer>
      <StyledInput
        onFocus={() => onFocus(id)}
        onBlur={() => onBlur(id)}
        ref={inputRef}
        value={value}
        onChange={handleChange}
      />
    </InputContainer>
  );
};

export default LiveListRow;
