import React, { useState } from 'react';

const useForm = <T>(callback: (data: T) => void, initial: T) => {
  const [values, setValues] = useState<T>(initial);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
    }

    callback(values);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((v) => ({ ...v, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
