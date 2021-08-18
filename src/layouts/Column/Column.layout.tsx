import React from 'react';

interface ColumnLayoutProps {
  children: React.ReactNode;
}

const ColumnLayout = ({ children }: ColumnLayoutProps) => {
  return <div>{children}</div>;
};

export default ColumnLayout;
