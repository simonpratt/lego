import { createContext } from 'react';

export interface MenuContentContextProps {
  panelSize: 'sm' | 'md';
}

const MenuContentContext = createContext<MenuContentContextProps>({
  panelSize: 'md',
});

export default MenuContentContext;
