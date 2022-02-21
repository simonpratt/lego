import { createContext } from 'react';

export type CardSize = 'fill' | 'xs' | 'sm' | 'md' | 'lg';

interface InlineCardSelectionContextProps {
  value?: string[];
  onToggle?: (value: string) => void;
}

const InlineCardSelectionContext = createContext<InlineCardSelectionContextProps>({
  value: undefined,
  onToggle: undefined,
});

export default InlineCardSelectionContext;
