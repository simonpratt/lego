import { createContext } from 'react';

export interface ButtonContextProps {
  width?: string;
  height?: string;
  alignSelf?: string;
  marginTop?: string;
}

const ButtonContext = createContext<ButtonContextProps>({
  width: undefined,
  height: undefined,
  alignSelf: undefined,
  marginTop: undefined,
});

export default ButtonContext;
