import React, { useCallback } from 'react';
import useFormNode from '../Form/useFormNode.hook';
import InlineCardSelectionContext from './_InlineCardSelection.context';

export interface InlineCardSelectionProps {
  children: React.ReactNode;
  name: string;
  value?: string[];
  onChange?: (value: string[]) => void;
}

const InlineCardSelection = ({
  children,
  name,
  value: propsValue,
  onChange: propsOnChange,
}: InlineCardSelectionProps) => {
  const { value: contextValue, onChange: contextOnChange } = useFormNode<string[]>(name);

  const value = contextValue || propsValue || [];

  const wrappedOnChange = useCallback(
    (val: string[]) => {
      if (propsOnChange) {
        propsOnChange(val);
      }

      if (contextOnChange) {
        contextOnChange(val);
      }
    },
    [propsOnChange, contextOnChange],
  );

  const handleToggle = (_value: string) => {
    if (!value) {
      return;
    }

    if (value.includes(_value)) {
      wrappedOnChange(value.filter((val) => val !== _value));
    } else {
      wrappedOnChange([...value, _value]);
    }
  };

  return (
    <InlineCardSelectionContext.Provider value={{ value, onToggle: handleToggle }}>
      {children}
    </InlineCardSelectionContext.Provider>
  );
};

export default InlineCardSelection;
