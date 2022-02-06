import { useContext } from 'react';
import FormStateContext from './FormState.context';

function useFormNode<T = string, K = string>(key: string) {
  const { value, errors, onChange } = useContext(FormStateContext);

  const internalOnChange = (_value: T) => {
    if (onChange) {
      onChange(key, _value);
    }
  };

  const internalValue = value[key];
  const internalError = errors[key];

  return {
    value: internalValue as T,
    error: internalError as K | undefined,
    onChange: internalOnChange,
  };
}

export default useFormNode;
