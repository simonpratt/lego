import { createContext } from 'react';

export interface MenuContentContextProps {
  panelSize: 'sm' | 'md';
  independentScroll: boolean;
}

const MenuContentContext = createContext<MenuContentContextProps>({
  panelSize: 'md',
  independentScroll: false,
});

export default MenuContentContext;
