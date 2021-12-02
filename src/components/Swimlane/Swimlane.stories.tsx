import React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';
import { InlineCard, Badge, Swimlane, CenteredLayout } from '../../';

const CardWrapper = styled.div`
  margin: 8px;
`;

export const Standard = () => {
  return (
    <>
      <Swimlane label='Jobs'>
        <CardWrapper>
          <InlineCard size='xs'>
            <InlineCard.Content center>
              <CenteredLayout>Jim{`'`}s Mowing</CenteredLayout>
            </InlineCard.Content>
            <InlineCard.Meta>
              <Badge variant='success'>Full Time</Badge>
            </InlineCard.Meta>
          </InlineCard>
        </CardWrapper>
      </Swimlane>
      <Swimlane label='Properties'>
        <CardWrapper>
          <InlineCard size='xs'>
            <InlineCard.Content center>
              <CenteredLayout>33 Oak Street</CenteredLayout>
            </InlineCard.Content>
            <InlineCard.Meta>
              <Badge variant='success'>Primary</Badge>
            </InlineCard.Meta>
          </InlineCard>
        </CardWrapper>
        <CardWrapper>
          <InlineCard size='xs'>
            <InlineCard.Content center>
              <CenteredLayout>402 Main Street</CenteredLayout>
            </InlineCard.Content>
            <InlineCard.Meta>
              <Badge variant='info'>Investment</Badge>
            </InlineCard.Meta>
          </InlineCard>
        </CardWrapper>
        <CardWrapper>
          <InlineCard size='xs'>
            <InlineCard.Content center>
              <CenteredLayout>12 Heart Avenue</CenteredLayout>
            </InlineCard.Content>
            <InlineCard.Meta>
              <Badge variant='info'>Investment</Badge>
            </InlineCard.Meta>
          </InlineCard>
        </CardWrapper>
      </Swimlane>
      <Swimlane label='Investments'>
        <CardWrapper>
          <InlineCard size='xs'>
            <InlineCard.Content center>
              <CenteredLayout>ASX 200</CenteredLayout>
            </InlineCard.Content>
            <InlineCard.Meta>
              <Badge variant='info'>Index Fund</Badge>
            </InlineCard.Meta>
          </InlineCard>
        </CardWrapper>
        <CardWrapper>
          <InlineCard size='xs'>
            <InlineCard.Content center>
              <CenteredLayout>AMP Super</CenteredLayout>
            </InlineCard.Content>
            <InlineCard.Meta>
              <Badge variant='info'>Super Fund</Badge>
            </InlineCard.Meta>
          </InlineCard>
        </CardWrapper>
      </Swimlane>
    </>
  );
};

export default {
  title: 'Components/Swimlane',
  component: Swimlane,
} as Meta;
