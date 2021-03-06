import React from 'react';
import styled from 'styled-components';
import ButtonContext from '../Button/Button.context';
import ControlGroupSpacer from './_ControlGroupSpacer.component';

export type ControlGroupVariation = 'focus' | 'submission';

export interface ControlGroupProps {
  children: React.ReactNode;
  variation?: ControlGroupVariation;
}

const SubmissionContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const FocusContainer = styled.div`
  & > * {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ControlGroup = ({ children, variation = 'focus' }: ControlGroupProps) => {
  if (variation === 'focus') {
    const buttonContextValue = {
      width: '100%',
    };

    return (
      <ButtonContext.Provider value={buttonContextValue}>
        <FocusContainer>{children}</FocusContainer>
      </ButtonContext.Provider>
    );
  }

  if (variation === 'submission') {
    const buttonContextValue = {
      alignSelf: 'flex-end',
      marginTop: '24px',
    };

    return (
      <ButtonContext.Provider value={buttonContextValue}>
        <SubmissionContainer>{children}</SubmissionContainer>
      </ButtonContext.Provider>
    );
  }

  return null;
};

ControlGroup.Spacer = ControlGroupSpacer;

export default ControlGroup;
