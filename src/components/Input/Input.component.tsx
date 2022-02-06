// eslint-disable-next-line @typescript-eslint/no-use-before-define
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';
import styled, { css } from 'styled-components';
import getThemeControlColours from '../../theme/helpers/getThemeControlColours';
import useFormNode from '../Form/useFormNode.hook';

export const INPUT_HEIGHT = 48;

const InputContainer = styled.div`
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
};

export interface IInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  error?: string;
  onChange?: (value: any) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const Input = ({
  label,
  name,
  placeholder,
  type = 'text',
  value,
  error: propsError,
  onChange,
  onFocus,
  onBlur,
}: IInputProps) => {
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

  return (
    <div>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <InputContainer>
        <StyledInput
          animate={error ? 'error' : undefined}
          variants={inputVariants}
          transition={{ type: 'spring', duration: 0.3 }}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value || contextValue}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
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
      </InputContainer>
    </div>
  );
};

export default Input;
