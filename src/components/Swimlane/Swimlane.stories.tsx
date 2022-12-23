import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { InlineCard, Badge, Swimlane, CenteredLayout } from '../../';
import InlineCardGroup from '../InlineCard/InlineCardGroup.component';

export const Standard = () => {
  return (
    <>
      <Swimlane label='Jobs'>
        <InlineCardGroup wrap>
          <InlineCard size='xs'>
            <InlineCard.Content center>
              <CenteredLayout>Jim{`'`}s Mowing</CenteredLayout>
            </InlineCard.Content>
            <InlineCard.Meta>
              <Badge variant='success'>Full Time</Badge>
            </InlineCard.Meta>
          </InlineCard>
        </InlineCardGroup>
      </Swimlane>
      <Swimlane label='Properties'>
        <InlineCardGroup wrap>
          <InlineCard size='xs'>
            <InlineCard.Content center>
              <CenteredLayout>33 Oak Street</CenteredLayout>
            </InlineCard.Content>
            <InlineCard.Meta>
              <Badge variant='success'>Primary</Badge>
            </InlineCard.Meta>
          </InlineCard>

          <InlineCard size='xs'>
            <InlineCard.Content center>
              <CenteredLayout>402 Main Street</CenteredLayout>
            </InlineCard.Content>
            <InlineCard.Meta>
              <Badge variant='info'>Investment</Badge>
            </InlineCard.Meta>
          </InlineCard>

          <InlineCard size='xs'>
            <InlineCard.Content center>
              <CenteredLayout>12 Heart Avenue</CenteredLayout>
            </InlineCard.Content>
            <InlineCard.Meta>
              <Badge variant='info'>Investment</Badge>
            </InlineCard.Meta>
          </InlineCard>
        </InlineCardGroup>
      </Swimlane>
      <Swimlane label='Investments'>
        <InlineCardGroup wrap>
          <InlineCard size='xs'>
            <InlineCard.Content center>
              <CenteredLayout>ASX 200</CenteredLayout>
            </InlineCard.Content>
            <InlineCard.Meta>
              <Badge variant='info'>Index Fund</Badge>
            </InlineCard.Meta>
          </InlineCard>

          <InlineCard size='xs'>
            <InlineCard.Content center>
              <CenteredLayout>AMP Super</CenteredLayout>
            </InlineCard.Content>
            <InlineCard.Meta>
              <Badge variant='info'>Super Fund</Badge>
            </InlineCard.Meta>
          </InlineCard>
        </InlineCardGroup>
      </Swimlane>
    </>
  );
};

export const LotsOfCards = () => {
  return (
    <>
      <Swimlane label='An Example'>
        <InlineCardGroup wrap>
          <InlineCard size='xs'>
            <InlineCard.Content center>
              <CenteredLayout>Card</CenteredLayout>
            </InlineCard.Content>
            <InlineCard.Meta>
              <Badge variant='success'>#1</Badge>
            </InlineCard.Meta>
          </InlineCard>
          <InlineCard size='xs'>
            <InlineCard.Content center>
              <CenteredLayout>Card</CenteredLayout>
            </InlineCard.Content>
            <InlineCard.Meta>
              <Badge variant='success'>#2</Badge>
            </InlineCard.Meta>
          </InlineCard>
          <InlineCard size='xs'>
            <InlineCard.Content center>
              <CenteredLayout>Card</CenteredLayout>
            </InlineCard.Content>
            <InlineCard.Meta>
              <Badge variant='success'>#3</Badge>
            </InlineCard.Meta>
          </InlineCard>
          <InlineCard size='xs'>
            <InlineCard.Content center>
              <CenteredLayout>Card</CenteredLayout>
            </InlineCard.Content>
            <InlineCard.Meta>
              <Badge variant='success'>#4</Badge>
            </InlineCard.Meta>
          </InlineCard>
          <InlineCard size='xs'>
            <InlineCard.Content center>
              <CenteredLayout>Card</CenteredLayout>
            </InlineCard.Content>
            <InlineCard.Meta>
              <Badge variant='success'>#5</Badge>
            </InlineCard.Meta>
          </InlineCard>
          <InlineCard size='xs'>
            <InlineCard.Content center>
              <CenteredLayout>Card</CenteredLayout>
            </InlineCard.Content>
            <InlineCard.Meta>
              <Badge variant='success'>#6</Badge>
            </InlineCard.Meta>
          </InlineCard>
          <InlineCard size='xs'>
            <InlineCard.Content center>
              <CenteredLayout>Card</CenteredLayout>
            </InlineCard.Content>
            <InlineCard.Meta>
              <Badge variant='success'>#7</Badge>
            </InlineCard.Meta>
          </InlineCard>
          <InlineCard size='xs'>
            <InlineCard.Content center>
              <CenteredLayout>Card</CenteredLayout>
            </InlineCard.Content>
            <InlineCard.Meta>
              <Badge variant='success'>#8</Badge>
            </InlineCard.Meta>
          </InlineCard>
          <InlineCard size='xs'>
            <InlineCard.Content center>
              <CenteredLayout>Card</CenteredLayout>
            </InlineCard.Content>
            <InlineCard.Meta>
              <Badge variant='success'>#9</Badge>
            </InlineCard.Meta>
          </InlineCard>
          <InlineCard size='xs' onClick={() => console.log('add')}>
            <InlineCard.Content center>
              <CenteredLayout>Add</CenteredLayout>
            </InlineCard.Content>
          </InlineCard>
        </InlineCardGroup>
      </Swimlane>
    </>
  );
};

export default {
  title: 'Components/Swimlane',
  component: Swimlane,
} as Meta;
