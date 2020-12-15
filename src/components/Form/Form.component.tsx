// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React from 'react';
import FormStateContext from './FormState.context';

interface FormProps {
  value: any;
  onChange: (value: any) => void;
  children: React.ReactNode;
}

const Form = ({ value, onChange, children }: FormProps) => {
  const onChangeFn = (key: string, fieldValue: any) => {
    onChange({
      ...value,
      [key]: fieldValue,
    });
  };

  const contextValue = {
    value,
    onChange: onChangeFn,
  };

  return <FormStateContext.Provider value={contextValue}>{children}</FormStateContext.Provider>;
};

export default Form;
