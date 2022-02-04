import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useKeypress from '../../hooks/useKeyPress';
import { FocusContext, FocusContextControllerHOC } from './_FocusContext';
import LiveListRow from './_LiveListRow';

interface LiveListValue {
  id: string;
  value: string;
}

export interface LiveListProps {
  value: LiveListValue[];
  onChange: (value: LiveListValue[]) => void;
}

const LiveList = ({ value, onChange }: LiveListProps) => {
  const { getFocused, requestFocus } = useContext(FocusContext);

  useKeypress('Enter', () => {
    onChange([...value, { id: uuidv4(), value: '' }]);
  });

  const handleRowChange = (updateId: string, updateValue: string) => {
    onChange(value.map((v) => (v.id === updateId ? { ...v, value: updateValue } : v)));
  };

  useKeypress('Backspace', () => {
    const focusedId = getFocused();

    if (!focusedId) {
      return;
    }

    const focusedValue = value.find((val) => val.id === focusedId);
    if (focusedValue?.value) {
      return;
    }

    const rowIndex = value.findIndex((val) => val.id === focusedId);
    const prevId = rowIndex > 0 ? value[rowIndex - 1].id : undefined;

    onChange(value.filter((val) => val.id !== focusedId));

    if (prevId) {
      // Timeout to prevent deleting the last char of the previous row
      setTimeout(() => {
        requestFocus(prevId);
      });
    }
  });

  return (
    <>
      {value.map((val, index) => (
        <LiveListRow key={index} id={val.id} value={val.value} onChange={(newVal) => handleRowChange(val.id, newVal)} />
      ))}
    </>
  );
};

export default FocusContextControllerHOC(LiveList);
