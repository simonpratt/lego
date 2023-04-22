import { createContext } from 'react';

export interface ActionMenuContextProps {
  closeActionMenu: () => void;
}

const ActionMenuContext = createContext<ActionMenuContextProps>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  closeActionMenu: () => {},
});

export default ActionMenuContext;
