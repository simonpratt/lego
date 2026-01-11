import React, { useContext, useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import FloatingActionButtonContext, { FabProps, SecondaryFabProps } from './_FloatingActionButton.context';
import FloatingActionButtonInternal, { MiniFabInternal } from './_FloatingActionButton.internal';
import MinimalMenuContext from '../MinimalMenu/MinimalMenu.context';

export interface FloatingActionButtonProviderProps {
  children: React.ReactNode;
}

const FloatingActionButtonProvider = ({ children }: FloatingActionButtonProviderProps) => {
  const [primaryFab, setPrimaryFab] = useState<FabProps | undefined>();
  const [secondaryFabs, setSecondaryFabs] = useState<SecondaryFabProps[]>([]);
  const { menuExists, isMobile } = useContext(MinimalMenuContext);

  const contextVal = useMemo(
    () => ({
      contextExists: true,
      setPrimaryButton: setPrimaryFab,
      setSecondaryButtons: setSecondaryFabs,
    }),
    [],
  );

  return (
    <FloatingActionButtonContext.Provider value={contextVal}>
      {children}
      <AnimatePresence>
        {primaryFab?.icon && (
          <FloatingActionButtonInternal
            key={primaryFab.id}
            icon={primaryFab.icon}
            onClick={primaryFab.onClick}
            variant={primaryFab.variant}
            label={primaryFab.label}
            data-testid={primaryFab.dataTestId}
          />
        )}
        {secondaryFabs.map((fab, index) => {
          const offsetBottom = menuExists && isMobile;
          const baseOffset = offsetBottom ? 76 : 20;
          const bottom = baseOffset + 56 + 8 + index * (40 + 10);
          const staggerDelay = 0.2 + 0.05 * (index + 1);

          return (
            <MiniFabInternal
              key={fab.id}
              icon={fab.icon}
              onClick={fab.onClick}
              variant={fab.variant}
              label={fab.label}
              bottom={bottom}
              staggerDelay={staggerDelay}
              data-testid={fab.dataTestId}
            />
          );
        })}
      </AnimatePresence>
    </FloatingActionButtonContext.Provider>
  );
};

export default FloatingActionButtonProvider;
