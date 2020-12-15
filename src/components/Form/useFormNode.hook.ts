import React, { useContext } from 'react';
import FormStateContext from './FormState.context';

function useFormNode(key: string) {
  const { value, onChange } = useContext(FormStateContext);

  const internalOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(key, e.target.value);
    }
  };

  const internalValue = value[key];

  return {
    value: internalValue,
    onChange: internalOnChange,
  };
}

export default useFormNode;
