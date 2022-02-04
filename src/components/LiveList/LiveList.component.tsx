import React, { useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useKeypress from '../../hooks/useKeyPress';
import useFormNode from '../Form/useFormNode.hook';
import { FocusContext, FocusContextProviderHOC } from './_FocusContext';
import LiveListRow from './_LiveListRow';

interface LiveListValue {
  id: string;
  value: string;
}

export interface LiveListProps {
  name: string;
  value?: LiveListValue[];
  onChange?: (value: LiveListValue[]) => void;
}

const LiveList = ({ value: inputValue, name, onChange: inputOnChange }: LiveListProps) => {
  const { getFocused, requestFocus } = useContext(FocusContext);
  const { value: contextValue, onChange: contextOnChange } = useFormNode<LiveListValue[]>(name);

  const value = contextValue || inputValue;
  const onChange = contextOnChange || inputOnChange;

  useEffect(() => {
    if (!value?.length) {
      onChange([{ id: uuidv4(), value: '' }]);
    }
  }, [value, onChange]);

  useKeypress('Enter', () => {
    const focusedId = getFocused();
    const focusedIndex = value.findIndex((val) => val.id === focusedId);

    const newItem = { id: uuidv4(), value: '' };

    const newValue = [...value];
    newValue.splice(focusedIndex + 1, 0, newItem);
    onChange(newValue);

    requestFocus(newItem.id);
  });

  useKeypress('Backspace', () => {
    const focusedId = getFocused();

    if (!focusedId) {
      return;
    }

    const focusedValue = value.find((val) => val.id === focusedId);
    if (focusedValue?.value) {
      return;
    }

    const focusedIndex = value.findIndex((val) => val.id === focusedId);
    const prevId = focusedIndex > 0 ? value[focusedIndex - 1].id : undefined;

    onChange(value.filter((val) => val.id !== focusedId));

    if (prevId) {
      // Timeout to prevent deleting the last char of the previous row
      setTimeout(() => {
        requestFocus(prevId);
      });
    }
  });

  const handleRowChange = (updateId: string, updateValue: string) => {
    onChange(value.map((v) => (v.id === updateId ? { ...v, value: updateValue } : v)));
  };

  if (!value?.length) {
    return null;
  }

  return (
    <div>
      {value.map((val) => (
        <LiveListRow
          key={val.id}
          id={val.id}
          value={val.value}
          onChange={(newVal) => handleRowChange(val.id, newVal)}
        />
      ))}
    </div>
  );
};

export default FocusContextProviderHOC(LiveList);
