import React from 'react';
import ChecklistItem from './_ChecklistItem.component';

export interface ChecklistItemProps {
  id: string;
  label: string;
}

export interface ChecklistProps {
  items: ChecklistItemProps[];
  value: string[];
  onChange: (value: string[]) => void;
}

const Checklist = ({ items, value, onChange }: ChecklistProps) => {
  const handleChange = (id: string, checked: boolean) => {
    if (checked && !value.includes(id)) {
      onChange([...value, id]);
    } else if (!checked && value.includes(id)) {
      onChange(value.filter((_id) => _id !== id));
    }
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <ChecklistItem
            label={item.label}
            value={value.includes(item.id)}
            onChange={(checked) => handleChange(item.id, checked)}
          />
        </div>
      ))}
    </div>
  );
};

export default Checklist;
