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
  'data-testid'?: string;
}

const FloatingActionButton = ({
  icon,
  onClick,
  variant = 'primary',
  'data-testid': dataTestId,
}: FloatingActionButtonProps) => {
  const { contextExists, setButton } = useContext(FloatingActionButtonContext);
  const id = useMemo(() => v4(), []);

  useEffect(() => {
    setButton({ id, icon, onClick, variant, dataTestId });
    return () => {
      setButton(undefined);
    };
  }, [icon, onClick, variant, dataTestId, setButton]);

  if (!contextExists) {
    return <FloatingActionButtonInternal icon={icon} onClick={onClick} variant={variant} data-testid={dataTestId} />;
  }

  return null;
};

FloatingActionButton.Provider = FloatingActionButtonProvider;

export default FloatingActionButton;
