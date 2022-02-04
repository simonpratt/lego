import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';

import getThemeControlColours from '../../theme/helpers/getThemeControlColours';
import { FocusContext } from './_FocusContext';

const PlainInput = styled.input`
  background-color: transparent;
  outline: none;
  border: none;

  margin: 2px 0;
  padding: 6px;

  background-color: ${(props) => getThemeControlColours(props.theme).background};
  color: ${(props) => getThemeControlColours(props.theme).font};
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

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <PlainInput
        onFocus={() => onFocus(id)}
        onBlur={() => onBlur(id)}
        id={id}
        ref={inputRef}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default LiveListRow;
