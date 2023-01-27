// eslint-disable-next-line @typescript-eslint/no-use-before-define
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import getThemeControlColours from '../../theme/helpers/getThemeControlColours';
import useFormNode, { getValue } from '../Form/useFormNode.hook';
import { InputStyles } from '../Input/Input.component';

const TextAreaContainer = styled.div`
  position: relative;
`;

const TextAreaLabel = styled.label`
  display: block;
  padding-bottom: 8px;

  color: ${(props) => getThemeControlColours(props.theme).font};
  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
`;

const StyledTextArea = styled(motion.textarea)`
  ${InputStyles}
  height: initial;
  width: 100% !important;
  min-height: 144px;
  padding: 12px;
`;

const ErrorMessage = styled(motion.div)`
  position: absolute;
  left: 38px;
  top: 16px;

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
  height: 42px;
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

const textAreaVariants = {
  error: { paddingLeft: '38px' },
  errorFocus: { paddingLeft: '38px', paddingTop: '32px' },
};

const messageVariants = {
  errorFocus: { opacity: 1, y: -4 },
};

export interface ITextAreaProps {
  'name'?: string;
  'label'?: string;
  'placeholder'?: string;
  'autoFocus'?: boolean;
  'value'?: string;
  'error'?: string;
  'onChange'?: (value: any) => void;
  'onFocus'?: () => void;
  'onBlur'?: () => void;
  'data-cy'?: string;
}

const TextArea = React.forwardRef(function ForwardRefTextArea(
  props: ITextAreaProps,
  ref: React.Ref<HTMLTextAreaElement>,
) {
  const {
    label,
    name,
    placeholder,
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

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      {label && <TextAreaLabel htmlFor={name}>{label}</TextAreaLabel>}
      <TextAreaContainer data-cy={dataCy}>
        <StyledTextArea
          ref={ref}
          animate={animationVariant}
          variants={textAreaVariants}
          transition={{ type: 'spring', duration: 0.3 }}
          name={name}
          placeholder={placeholder}
          value={getValue(value, contextValue)}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoFocus={autoFocus}
          data-cy='text-area'
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
      </TextAreaContainer>
    </div>
  );
});

export default TextArea;
