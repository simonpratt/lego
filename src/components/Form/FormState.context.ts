import { createContext } from 'react';

interface FormStateContextProps {
  value: Record<string, any>;
  errors: Record<string, any>;
  onChange?: (key: string, value: any) => void;
}

const FormStateContext = createContext<FormStateContextProps>({
  value: {},
  errors: {},
  onChange: undefined,
});

export default FormStateContext;
