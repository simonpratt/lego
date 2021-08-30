import { createContext } from 'react';

export type CardSize = 'fill' | 'xs' | 'sm' | 'md' | 'lg';

interface CardContextProps {
  size: CardSize;
}

const CardContext = createContext<CardContextProps>({
  size: 'lg',
});

export default CardContext;
