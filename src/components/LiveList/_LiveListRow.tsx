import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { FocusContext } from './_FocusContext';
import Input from '../Input/Input.component';

const InputContainer = styled(motion.div)`
  position: relative;
  margin: 2px 0;

  background-color: ${(props) => props.theme.colours.controlBackground};
`;

const RemoveContainer = styled(motion.div)`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;

  color: ${(props) => props.theme.colours.defaultFont};
`;

const RemoveInner = styled.div`
  width: 24px;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const removeVariants = {
  hover: { opacity: 1, x: -10 },
  focus: { opacity: 1, x: -10 },
};

interface LiveListRowProps {
  id: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  onRemove: () => void;
}

const LiveListRow = ({ id, value, error, onChange, onRemove }: LiveListRowProps) => {
  const { onFocus, onBlur, registerFocusable, deregisterFocusable } = useContext(FocusContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

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

  const handleChange = (e: string) => {
    onChange(e);
  };

  const handleFocus = () => {
    setIsFocused(true);
    onFocus(id);
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur(id);
  };

  return (
    <InputContainer whileHover='hover' data-cy='live-list-row'>
      <Input
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={inputRef}
        value={value || ''}
        error={error}
        onChange={handleChange}
        data-cy='live-list-input'
      />
      <RemoveContainer
        animate={isFocused ? 'focus' : undefined}
        style={{ opacity: 0 }}
        variants={removeVariants}
        transition={{ type: 'spring', duration: 0.3 }}
      >
        <RemoveInner onClick={onRemove} data-cy='live-list-remove'>
          <FontAwesomeIcon icon={faTimes} />
        </RemoveInner>
      </RemoveContainer>
    </InputContainer>
  );
};

export default LiveListRow;
