import { createContext, Dispatch, SetStateAction } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ColourVariant } from '../../theme/theme.types';

export interface FabProps {
  id: string;
  icon: IconDefinition | null;
  onClick: () => void;
  variant?: ColourVariant;
  label?: string;
  dataTestId?: string;
}

export interface SecondaryFabProps {
  id: string;
  icon: IconDefinition;
  onClick: () => void;
  variant?: ColourVariant;
  label?: string;
  dataTestId?: string;
}

interface FloatingActionButtonContextProps {
  contextExists: boolean;
  setPrimaryButton: Dispatch<SetStateAction<FabProps | undefined>>;
  setSecondaryButtons: Dispatch<SetStateAction<SecondaryFabProps[]>>;
}

const FloatingActionButtonContext = createContext<FloatingActionButtonContextProps>({
  contextExists: false,
  setPrimaryButton: () => {},
  setSecondaryButtons: () => {},
});

export default FloatingActionButtonContext;
