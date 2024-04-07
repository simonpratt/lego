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
import { OptionsPopper, SelectOption } from '../common/Options.component';
import Loader from '../Loader/Loader.component';

const InputContainer = styled.div`
  position: relative;
  border-radius: 2px;

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

const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  'data-testid'?: string;
  'suggestions'?: SelectOption[];
  'loading'?: boolean;
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
    'data-testid': dataTestId,
    suggestions,
    loading,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [referenceElement, setReferenceElement] = useState<any>();
  const { value: contextValue, error: contextError, onChange: contextOnChange } = useFormNode(name);

  const error = contextError || propsError;

  const splitDescription = description ? description.split('\\n').map((str) => str.trim()) : undefined;

  const handleSetSuggestion = (value: string) => {
    setIsOpen(false);
    if (onChange) {
      onChange(value);
    }

    if (contextOnChange) {
      contextOnChange(value);
    }
  };

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

  const handleClick = () => {
    setIsOpen(true);
  };

  const animationVariant = error ? (isFocused ? 'errorFocus' : 'error') : undefined;

  const filteredOptions = suggestions?.filter(
    (option) => !value || option.label.toLowerCase().includes(value.toLowerCase()),
  );

  return (
    <div>
      {label && <ControlLabel htmlFor={name}>{label}</ControlLabel>}
      <InputContainer data-testid={dataTestId} ref={setReferenceElement}>
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
          onClick={handleClick}
          autoFocus={autoFocus}
          data-testid='input'
        />
        <ErrorContainer
          animate={error ? 'show' : undefined}
          style={{ opacity: 0 }}
          variants={errorVariants}
          transition={{ type: 'spring', duration: 0.3 }}
          data-testid='error-indicator'
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
            data-testid='error-message'
          >
            {error}
          </ErrorMessage>
        )}
        {loading && (
          <LoadingContainer>
            <Loader size='sm' />
          </LoadingContainer>
        )}
      </InputContainer>
      {splitDescription && (
        <ControlDescription>
          {splitDescription.map((line, index) => (
            <span key={index}>
              {index !== 0 && <br />}
              {line}
            </span>
          ))}
        </ControlDescription>
      )}
      {filteredOptions && isOpen && (
        <OptionsPopper
          referenceElement={referenceElement}
          options={filteredOptions}
          onSelect={handleSetSuggestion}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
});

export default Input;
