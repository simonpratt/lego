import React from 'react';
import ChecklistItem from './_ChecklistItem.component';

export interface ChecklistProps {
  children: React.ReactNode;
}

const Checklist = ({ children }: ChecklistProps) => {
  return <div>{children}</div>;
};

Checklist.Item = ChecklistItem;

export default Checklist;
