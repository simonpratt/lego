import { useContext } from 'react';
import FormStateContext from './FormState.context';

export const getValue = <T = string>(value: T, contextValue: T): T => {
  if (value !== null && value !== undefined) {
    return value;
  }

  return contextValue;
};

function useFormNode<T = string, K = string>(key?: string) {
  const { value, errors, onChange } = useContext(FormStateContext);

  if (!key) {
    return {
      value: undefined,
      error: undefined,
      onChange: undefined,
    };
  }

  const internalOnChange = (_value: T) => {
    if (onChange) {
      onChange(key, _value);
    }
  };

  const internalValue = value[key];
  const internalError = errors[key];

  return {
    value: internalValue as T | undefined,
    error: internalError as K | undefined,
    onChange: internalOnChange,
  };
}

export default useFormNode;
