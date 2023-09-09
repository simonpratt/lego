import { createContext } from 'react';

export interface ButtonContextProps {
  width?: string;
  height?: string;
  alignSelf?: string;
  marginTop?: string;
  noBackground?: boolean;
}

const ButtonContext = createContext<ButtonContextProps>({
  width: undefined,
  height: undefined,
  alignSelf: undefined,
  marginTop: undefined,
  noBackground: undefined,
});

export default ButtonContext;
