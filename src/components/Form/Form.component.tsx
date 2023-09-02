// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React from 'react';
import FormStateContext from './FormState.context';
import NestedFormArray from './_NestedFormArray';

interface FormProps {
  value: Record<string, any>;
  errors?: Record<string, any>;
  onChange: (value: any) => void;
  onSubmit?: () => void;
  children: React.ReactNode;
}

const Form = ({ value, errors = {}, onChange, onSubmit, children }: FormProps) => {
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
    errors,
    onChange: onChangeFn,
  };

  return (
    <FormStateContext.Provider value={contextValue}>
      <form onSubmit={onSubmitFn}>{children}</form>
    </FormStateContext.Provider>
  );
};

Form.NestedFormArray = NestedFormArray;

export default Form;
