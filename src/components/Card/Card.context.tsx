import { createContext } from 'react';

export type CardSize = 'fill' | 'xs' | 'sm' | 'md' | 'lg';

interface CardContextProps {
  size: CardSize;
  actionsRef: any;
}

const CardContext = createContext<CardContextProps>({
  size: 'lg',
  actionsRef: undefined,
});

export default CardContext;
