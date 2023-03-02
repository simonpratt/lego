import React from 'react';
import styled from 'styled-components';
import Text from '../Text/Text.component';
import Toggle from '../Toggle/Toggle.component';

const ToggleHeaderContainer = styled.div`
  height: 48px;
  width: 100%;
  padding: 8px 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  background-color: ${(props) => props.theme.colours.cardBackgroundSecondary};
`;

export interface CardToggleSectionProps {
  children: React.ReactNode;
  heading: string;
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
}

const CardToggleSection = ({ heading, enabled, setEnabled, children }: CardToggleSectionProps) => {
  return (
    <>
      <ToggleHeaderContainer onClick={() => setEnabled(!enabled)}>
        <Text>{heading}</Text>
        <Toggle value={enabled} onChange={setEnabled} />
      </ToggleHeaderContainer>
      {enabled && <div>{children}</div>}
    </>
  );
};

export default CardToggleSection;
