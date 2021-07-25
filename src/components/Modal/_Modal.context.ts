import { createContext } from 'react';

export interface ModalContextProps {
  onClose: () => void;
}

const ModalContext = createContext<ModalContextProps>({
  // eslint-disable-next-line
  onClose: () => { },
});

export default ModalContext;
