import { createContext } from 'react';

export interface ButtonContextProps {
  width?: string;
  alignSelf?: string;
  marginTop?: string;
}

const ButtonContext = createContext<ButtonContextProps>({
  width: undefined,
  alignSelf: undefined,
  marginTop: undefined,
});

export default ButtonContext;
