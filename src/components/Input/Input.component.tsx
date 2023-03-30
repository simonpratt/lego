// eslint-disable-next-line @typescript-eslint/no-use-before-define
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import ControlDescription from '../../shared/ControlDescription';
import ControlLabel from '../../shared/ControlLabel';
import { ControlStyles } from '../../shared/ControlStyles';
import useFormNode, { getValue } from '../Form/useFormNode.hook';

const InputContainer = styled.div`
  position: relative;
  margin: 2px 0;

  background-color: ${(props) => props.theme.colours.controlBackground};
`;

const StyledInput = styled(motion.input)`
  ${ControlStyles}
`;

const ErrorMessage = styled(motion.div)`
  position: absolute;
  left: 38px;
  bottom: 0;

  pointer-events: none;
  touch-action: none;

  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
  color: ${(props) => props.theme.colours.statusDanger.main};
`;

const ErrorContainer = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;

  pointer-events: none;
  touch-action: none;

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

const errorVariants = {
  show: { opacity: 1, x: 10 },
};

const inputVariants = {
  error: { paddingLeft: '38px' },
  errorFocus: { paddingLeft: '38px', paddingBottom: '18px' },
};

const messageVariants = {
  errorFocus: { opacity: 1, y: -4 },
};

export interface IInputProps {
  'name'?: string;
  'label'?: string;
  'description'?: string;
  'placeholder'?: string;
  'disabled'?: boolean;
  'type'?: string;
  'autoFocus'?: boolean;
  'value'?: string;
  'error'?: string;
  'onChange'?: (value: any) => void;
  'onFocus'?: () => void;
  'onBlur'?: () => void;
  'data-cy'?: string;
}

const Input = React.forwardRef(function ForwardRefInput(props: IInputProps, ref: React.Ref<HTMLInputElement>) {
  const {
    label,
    name,
    description,
    placeholder,
    disabled,
    type = 'text',
    autoFocus,
    value,
    'error': propsError,
    onChange,
    onFocus,
    onBlur,
    'data-cy': dataCy,
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const { value: contextValue, error: contextError, onChange: contextOnChange } = useFormNode(name);

  const error = contextError || propsError;

  const splitDescription = description ? description.split('\\n').map((str) => str.trim()) : undefined;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }

    if (contextOnChange) {
      contextOnChange(e.target.value);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);

    if (onFocus) {
      onFocus();
    }
  };

  const handleBlur = () => {
    setIsFocused(false);

    if (onBlur) {
      onBlur();
    }
  };

  const animationVariant = error ? (isFocused ? 'errorFocus' : 'error') : undefined;

  return (
    <div>
      {label && <ControlLabel htmlFor={name}>{label}</ControlLabel>}
      <InputContainer data-cy={dataCy}>
        <StyledInput
          ref={ref}
          animate={animationVariant}
          variants={inputVariants}
          transition={{ type: 'spring', duration: 0.3 }}
          type={type}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          value={getValue(value, contextValue)}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoFocus={autoFocus}
          data-cy='input'
        />
        <ErrorContainer
          animate={error ? 'show' : undefined}
          style={{ opacity: 0 }}
          variants={errorVariants}
          transition={{ type: 'spring', duration: 0.3 }}
          data-cy='error-indicator'
        >
          <ErrorInner>
            <FontAwesomeIcon icon={faExclamationCircle} />
          </ErrorInner>
        </ErrorContainer>
        {error && (
          <ErrorMessage
            style={{ opacity: 0, y: 0 }}
            animate={animationVariant}
            variants={messageVariants}
            transition={{ type: 'spring', duration: 0.3 }}
            data-cy='error-message'
          >
            {error}
          </ErrorMessage>
        )}
      </InputContainer>
      {splitDescription && (
        <ControlDescription>
          {splitDescription.map((line, index) => (
            <>
              {index !== 0 && <br />}
              {line}
            </>
          ))}
        </ControlDescription>
      )}
    </div>
  );
});

export default Input;
