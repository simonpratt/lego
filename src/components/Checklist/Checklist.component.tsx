import React, { useEffect, useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import styled from 'styled-components';
import ChecklistItem from './_ChecklistItem.component';

const ListDivider = styled.div`
  width: 100%;
  height: 0px;

  padding: 20px 0;
`;

export interface ChecklistItemProps {
  id: string;
  label: string;
}

export interface ChecklistProps {
  items: ChecklistItemProps[];
  value: string[];
  onChange: (value: string[]) => void;
  noSplitGap?: boolean;
  large?: boolean;
}

const Checklist = ({ items, value, onChange, noSplitGap, large }: ChecklistProps) => {
  const [checkedOrder, setCheckedOrder] = useState<string[]>([]);

  useEffect(() => {
    if (value.some((id) => !checkedOrder.includes(id))) {
      const newCheckedOrder = [...checkedOrder];
      value.forEach((valueId) => {
        if (!newCheckedOrder.includes(valueId)) {
          newCheckedOrder.push(valueId);
        }
      });

      setCheckedOrder(newCheckedOrder);
    }
  }, [value, checkedOrder, setCheckedOrder]);

  const handleChange = (id: string, checked: boolean) => {
    if (checked && !value.includes(id)) {
      onChange([...value, id]);
      setCheckedOrder([id, ...checkedOrder]);
    } else if (!checked && value.includes(id)) {
      onChange(value.filter((_id) => _id !== id));
      setCheckedOrder(checkedOrder.filter((_id) => _id !== id));
    }
  };

  const checkedItems = items
    .filter((item) => value.includes(item.id))
    .sort((a, b) => checkedOrder.indexOf(a.id) - checkedOrder.indexOf(b.id));
  const unCheckedItems = items.filter((item) => !value.includes(item.id));

  return (
    <LayoutGroup data-testid='checklist'>
      {unCheckedItems.map((item) => (
        <motion.div layoutId={item.id} key={item.id}>
          <ChecklistItem
            label={item.label}
            value={value.includes(item.id)}
            onChange={(checked) => handleChange(item.id, checked)}
            large={!!large}
          />
        </motion.div>
      ))}

      {checkedItems.length && !noSplitGap ? <ListDivider /> : null}

      {checkedItems.map((item) => (
        <motion.div layoutId={item.id} key={item.id}>
          <ChecklistItem
            label={item.label}
            value={value.includes(item.id)}
            onChange={(checked) => handleChange(item.id, checked)}
            large={!!large}
          />
        </motion.div>
      ))}
    </LayoutGroup>
  );
};

export default Checklist;
