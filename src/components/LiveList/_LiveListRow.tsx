import { faExclamationCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { InputStyles } from '../Input/Input.component';
import { FocusContext } from './_FocusContext';

const InputContainer = styled(motion.div)`
  position: relative;
  margin: 2px 0;

  background-color: ${(props) => props.theme.colours.controlBackground};
`;

const Input = styled(motion.input)`
  ${InputStyles}
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

const ErrorContainer = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;

  color: ${(props) => props.theme.colours.statusDanger.main};
`;

const ErrorInner = styled.div`
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

const errorVariants = {
  show: { opacity: 1, x: 10 },
};

const inputVariants = {
  error: { paddingLeft: '38px' },
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
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
    <InputContainer whileHover='hover'>
      <Input
        animate={error ? 'error' : undefined}
        variants={inputVariants}
        transition={{ type: 'spring', duration: 0.3 }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={inputRef}
        value={value}
        onChange={handleChange}
      />
      <RemoveContainer
        animate={isFocused ? 'focus' : undefined}
        style={{ opacity: 0 }}
        variants={removeVariants}
        transition={{ type: 'spring', duration: 0.3 }}
      >
        <RemoveInner onClick={onRemove}>
          <FontAwesomeIcon icon={faTimes} />
        </RemoveInner>
      </RemoveContainer>
      <ErrorContainer
        animate={error ? 'show' : undefined}
        style={{ opacity: 0 }}
        variants={errorVariants}
        transition={{ type: 'spring', duration: 0.3 }}
      >
        <ErrorInner>
          <FontAwesomeIcon icon={faExclamationCircle} />
        </ErrorInner>
      </ErrorContainer>
    </InputContainer>
  );
};

export default LiveListRow;
