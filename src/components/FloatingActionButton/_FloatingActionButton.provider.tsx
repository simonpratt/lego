import React, { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import FloatingActionButtonContext, { FabProps } from './_FloatingActionButton.context';
import FloatingActionButtonInternal from './_FloatingActionButton.internal';

export interface FloatingActionButtonProviderProps {
  children: React.ReactNode;
}

const FloatingActionButtonProvider = ({ children }: FloatingActionButtonProviderProps) => {
  const [fab, setFab] = useState<FabProps | undefined>();

  const contextVal = useMemo(
    () => ({
      contextExists: true,
      setButton: setFab,
    }),
    [setFab],
  );

  return (
    <FloatingActionButtonContext.Provider value={contextVal}>
      {children}
      <AnimatePresence>
        {fab?.icon && (
          <FloatingActionButtonInternal key={fab.id} icon={fab.icon} onClick={fab.onClick} variant={fab.variant} />
        )}
      </AnimatePresence>
    </FloatingActionButtonContext.Provider>
  );
};

export default FloatingActionButtonProvider;
