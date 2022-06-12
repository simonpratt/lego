// eslint-disable-next-line @typescript-eslint/no-use-before-define
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import getThemeControlColours from '../../theme/helpers/getThemeControlColours';
import useFormNode, { getValue } from '../Form/useFormNode.hook';

export const INPUT_HEIGHT = 48;

const InputContainer = styled(motion.div)`
  position: relative;
  margin: 2px 0;

  background-color: ${(props) => props.theme.colours.controlBackground};
`;

const InputLabel = styled.label`
  display: block;
  padding-bottom: 8px;

  color: ${(props) => getThemeControlColours(props.theme).font};
  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
`;

export const InputStyles = css`
  outline: none;
  box-shadow: none;

  width: 100%;
  height: ${INPUT_HEIGHT}px;
  padding: 0 12px;
  scroll-margin-bottom: 100px;

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

const StyledInput = styled(motion.input)`
  ${InputStyles}
`;

const ErrorMessage = styled(motion.div)`
  position: absolute;
  left: 38px;
  bottom: 0;

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
  'placeholder'?: string;
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
    placeholder,
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

  return (
    <div>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <InputContainer animate={error ? (isFocused ? 'errorFocus' : 'error') : undefined}>
        <StyledInput
          ref={ref}
          variants={inputVariants}
          transition={{ type: 'spring', duration: 0.3 }}
          type={type}
          name={name}
          placeholder={placeholder}
          value={getValue(value, contextValue)}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoFocus={autoFocus}
          data-cy={dataCy || 'input'}
        />
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
        {error && (
          <ErrorMessage
            style={{ opacity: 0, y: 0 }}
            variants={messageVariants}
            transition={{ type: 'spring', duration: 0.3 }}
          >
            {error}
          </ErrorMessage>
        )}
      </InputContainer>
    </div>
  );
});

export default Input;
