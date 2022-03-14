import React from 'react';

export interface ChecklistItemProps {
  children: React.ReactNode;
  value: string;
}

const ChecklistItem = ({ children }: ChecklistItemProps) => {
  return <div>{children}</div>;
};

export default ChecklistItem;
