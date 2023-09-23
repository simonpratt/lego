import React from 'react';
import FormStateContext from './FormState.context';
import useFormNode from './useFormNode.hook';

export interface NestedFormArrayProps {
  name: string;
  index: number;
  children: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UnknownSubfield = Record<string, any>;

const NestedFormArray = ({ name, index, children }: NestedFormArrayProps) => {
  const { value, error, onChange } = useFormNode<UnknownSubfield[], UnknownSubfield[]>(name);

  const safeValue = Array.from(Array(Math.max(index + 1, value?.length || 0))).map((_, i) => value?.[i] || {});
  const safeError = Array.from(Array(Math.max(index + 1, value?.length || 0))).map((_, i) => error?.[i] || {});

  const nestedValue = safeValue[index];
  const nestedErrors = safeError[index];

  const onChangeFn = (key: string, fieldValue: string) => {
    const newValue = [
      ...safeValue.map((item: UnknownSubfield, i: number) => (i === index ? { ...item, [key]: fieldValue } : item)),
    ];
    onChange && onChange(newValue);
  };

  const contextValue = {
    value: nestedValue,
    errors: nestedErrors,
    onChange: onChangeFn,
  };

  return <FormStateContext.Provider value={contextValue}>{children}</FormStateContext.Provider>;
};

export default NestedFormArray;
