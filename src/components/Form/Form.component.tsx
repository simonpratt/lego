// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React from 'react';
import FormStateContext from './FormState.context';

interface FormProps {
  value: any;
  onChange: (value: any) => void;
  onSubmit?: () => void;
  children: React.ReactNode;
}

const Form = ({ value, onChange, onSubmit, children }: FormProps) => {
  const onChangeFn = (key: string, fieldValue: any) => {
    onChange({
      ...value,
      [key]: fieldValue,
    });
  };

  const onSubmitFn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (onSubmit) {
      onSubmit();
    }
  };

  const contextValue = {
    value,
    onChange: onChangeFn,
  };

  return (
    <FormStateContext.Provider value={contextValue}>
      <form onSubmit={onSubmitFn}>{children}</form>
    </FormStateContext.Provider>
  );
};

export default Form;
