import { useContext } from 'react';
import FormStateContext from './FormState.context';

function useFormNode(key: string) {
  const { value, onChange } = useContext(FormStateContext);

  const internalOnChange = (_value: any) => {
    if (onChange) {
      onChange(key, _value);
    }
  };

  const internalValue = value[key];

  return {
    value: internalValue,
    onChange: internalOnChange,
  };
}

export default useFormNode;
