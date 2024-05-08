import { createContext } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ColourVariant } from '../../theme/theme.types';

export interface FabProps {
  id: string;
  icon: IconDefinition | null;
  onClick: () => void;
  variant?: ColourVariant;
}

interface FloatingActionButtonContextProps {
  contextExists: boolean;
  setButton: (props: FabProps | undefined) => void;
}

const FloatingActionButtonContext = createContext<FloatingActionButtonContextProps>({
  contextExists: false,
  setButton: () => {},
});

export default FloatingActionButtonContext;
