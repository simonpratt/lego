import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React, { useCallback, useContext, useEffect } from 'react';
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

const AddRowInner = styled(motion.div)`
  padding: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
  overflow: hidden;

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

const addVariants = {
  hover: { scale: 1.05 },
};

export interface LiveListProps {
  name: string;
  value?: LiveListValue[];
  onChange?: (value: LiveListValue[]) => void;
}

const defaultValue = [{ id: uuidv4(), value: '' }];

const LiveList = ({ value: inputValue, name, onChange: propsOnChange }: LiveListProps) => {
  const { getFocused, requestFocus } = useContext(FocusContext);
  const {
    value: contextValue,
    error: contextError,
    onChange: contextOnChange,
  } = useFormNode<LiveListValue[], Record<string, string>>(name);

  const value = contextValue || inputValue || defaultValue;

  const wrappedOnChange = useCallback(
    (val: LiveListValue[]) => {
      if (propsOnChange) {
        propsOnChange(val);
      }

      if (contextOnChange) {
        contextOnChange(val);
      }
    },
    [propsOnChange, contextOnChange],
  );

  useEffect(() => {
    if (!value?.length) {
      wrappedOnChange([{ id: uuidv4(), value: '' }]);
    }
  }, [value, wrappedOnChange]);

  useKeypress('Enter', () => {
    const focusedId = getFocused();
    const focusedIndex = value.findIndex((val) => val.id === focusedId);

    const newItem = { id: uuidv4(), value: '' };

    const newValue = [...value];
    newValue.splice(focusedIndex + 1, 0, newItem);
    wrappedOnChange(newValue);

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
    if (focusedIndex === 0) {
      return;
    }

    const prevId = focusedIndex > 0 ? value[focusedIndex - 1].id : undefined;

    wrappedOnChange(value.filter((val) => val.id !== focusedId));

    if (prevId) {
      // Timeout to prevent deleting the last char of the previous row
      setTimeout(() => {
        requestFocus(prevId);
      });
    }
  });

  const handleRowChange = (updateId: string, updateValue: string) => {
    wrappedOnChange(value.map((v) => (v.id === updateId ? { ...v, value: updateValue } : v)));
  };

  const handleRowRemove = (id: string) => {
    if (value.length === 1) {
      const withValueCleared = [...value];
      value[0].value = '';
      wrappedOnChange(withValueCleared);
      return;
    }

    wrappedOnChange(value.filter((val) => val.id !== id));
  };

  const handleRowAdd = () => {
    const newItem = { id: uuidv4(), value: '' };
    wrappedOnChange([...value, newItem]);
  };

  if (!value?.length) {
    return null;
  }

  return (
    <div data-cy='live-list'>
      {value.map((val) => (
        <LiveListRow
          key={val.id}
          id={val.id}
          value={val.value}
          error={contextError ? contextError[val.id] : undefined}
          onChange={(newVal) => handleRowChange(val.id, newVal)}
          onRemove={() => handleRowRemove(val.id)}
        />
      ))}
      <AddRow>
        <AddRowInner
          style={{ scale: 1 }}
          whileHover='hover'
          variants={addVariants}
          onClick={handleRowAdd}
          data-cy='button-add-list-item'
        >
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
