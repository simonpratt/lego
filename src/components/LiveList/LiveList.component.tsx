import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import useKeypress from '../../hooks/useKeyPress';
import useFormNode from '../Form/useFormNode.hook';
import { FocusContext, FocusContextProviderHOC } from './_FocusContext';
import LiveListRow from './_LiveListRow';

const AddRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  margin-top: 4px;
`;

const AddRowInner = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;

  color: ${(props) => props.theme.colours.defaultFont};
  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
`;

const IconContainer = styled.div`
  padding-right: 4px;
`;

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

  const handleRowRemove = (id: string) => {
    if (value.length === 1) {
      const withValueCleared = [...value];
      value[0].value = '';
      onChange(withValueCleared);
      return;
    }

    onChange(value.filter((val) => val.id !== id));
  };

  const handleRowAdd = () => {
    const newItem = { id: uuidv4(), value: '' };
    onChange([...value, newItem]);
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
          onRemove={() => handleRowRemove(val.id)}
        />
      ))}
      <AddRow>
        <AddRowInner onClick={handleRowAdd}>
          <IconContainer>
            <FontAwesomeIcon icon={faPlusCircle} />
          </IconContainer>
          add
        </AddRowInner>
      </AddRow>
    </div>
  );
};

export default FocusContextProviderHOC(LiveList);
