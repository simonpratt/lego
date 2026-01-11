import React, { useContext, useEffect, useMemo } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ColourVariant } from '../../theme/theme.types';
import FloatingActionButtonContext from './_FloatingActionButton.context';
import FloatingActionButtonProvider from './_FloatingActionButton.provider';
import { v4 } from 'uuid';
import FloatingActionButtonInternal from './_FloatingActionButton.internal';

interface FloatingActionButtonProps {
  'icon': IconDefinition;
  'onClick': () => void;
  'variant'?: ColourVariant;
  'label'?: string;
  'data-testid'?: string;
}

const FloatingActionButton = ({
  icon,
  onClick,
  variant = 'primary',
  label,
  'data-testid': dataTestId,
}: FloatingActionButtonProps) => {
  const { contextExists, setPrimaryButton } = useContext(FloatingActionButtonContext);
  const id = useMemo(() => v4(), []);

  useEffect(() => {
    setPrimaryButton({ id, icon, onClick, variant, label, dataTestId });
    return () => {
      setPrimaryButton(undefined);
    };
  }, [icon, onClick, variant, label, dataTestId, setPrimaryButton, id]);

  if (!contextExists) {
    return (
      <FloatingActionButtonInternal
        icon={icon}
        onClick={onClick}
        variant={variant}
        label={label}
        data-testid={dataTestId}
      />
    );
  }

  return null;
};

interface SecondaryFloatingActionButtonProps {
  'icon': IconDefinition;
  'onClick': () => void;
  'variant'?: ColourVariant;
  'label'?: string;
  'data-testid'?: string;
}

const SecondaryFloatingActionButton = ({
  icon,
  onClick,
  variant = 'primary',
  label,
  'data-testid': dataTestId,
}: SecondaryFloatingActionButtonProps) => {
  const { setSecondaryButtons } = useContext(FloatingActionButtonContext);
  const id = useMemo(() => v4(), []);

  useEffect(() => {
    // Register this secondary FAB
    setSecondaryButtons((prev) => [...prev, { id, icon, onClick, variant, label, dataTestId }]);

    return () => {
      // Unregister this secondary FAB
      setSecondaryButtons((prev) => prev.filter((fab) => fab.id !== id));
    };
  }, [icon, onClick, variant, label, dataTestId, setSecondaryButtons, id]);

  // Secondary FABs always return null - rendered by provider
  return null;
};

FloatingActionButton.Provider = FloatingActionButtonProvider;
FloatingActionButton.Secondary = SecondaryFloatingActionButton;

export default FloatingActionButton;
