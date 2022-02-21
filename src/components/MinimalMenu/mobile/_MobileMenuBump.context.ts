import { createContext } from 'react';

export interface MobileMenuBumpContextProps {
  setBumpX: (offset?: number) => void;
}

const MobileMenuBumpContext = createContext<MobileMenuBumpContextProps>({
  // eslint-disable-next-line
  setBumpX: (offset?: number) => { },
});

export default MobileMenuBumpContext;
