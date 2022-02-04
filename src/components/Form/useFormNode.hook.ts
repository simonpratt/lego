import { useContext } from 'react';
import FormStateContext from './FormState.context';

function useFormNode<T>(key: string) {
  const { value, onChange } = useContext(FormStateContext);

  const internalOnChange = (_value: T) => {
    if (onChange) {
      onChange(key, _value);
    }
  };

  const internalValue = value[key];

  return {
    value: internalValue as T,
    onChange: internalOnChange,
  };
}

export default useFormNode;
