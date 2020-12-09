import React from 'react';
import styled from 'styled-components';

export type SpacerSize = '0.5x' | '1x' | '2x' | '4x' | '6x';

export interface SpacerProps {
  size: SpacerSize;
}

const getSpacing = (size: SpacerSize) => {
  switch (size) {
    case '0.5x':
      return '4px';
    case '1x':
      return '8px';
    case '2x':
      return '16px';
    case '4x':
      return '32px';
    case '6x':
      return '48px';
    default:
      return 0;
  }
};

const SpacerInternal = styled.div<SpacerProps>`
  width: 0;
  visibility: hidden;
  height: ${(props) => getSpacing(props.size)};
`;

const Spacer = ({ size }: SpacerProps) => <SpacerInternal size={size} />;

export default Spacer;
