import { createContext } from 'react';

export type CardSize = 'fill' | 'xs' | 'sm' | 'md' | 'lg';

interface CardContextProps {
  size: CardSize;
  actionsRef?: HTMLDivElement;
  showActions: boolean;
  setHasActions: (hasActions: boolean) => void;
}

const CardContext = createContext<CardContextProps>({
  size: 'lg',
  actionsRef: undefined,
  showActions: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setHasActions: () => {},
});

export default CardContext;
