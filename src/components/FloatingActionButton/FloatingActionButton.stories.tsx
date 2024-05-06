import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { FloatingActionButton, MinimalMenu } from '../..';
import { faHamburger, faPlus } from '@fortawesome/free-solid-svg-icons';

export const Standard = () => (
  <>
    <MinimalMenu>
      <MinimalMenu.Item icon={faHamburger} label='Eat' active={false} onClick={() => {}} />
    </MinimalMenu>
    <MinimalMenu.Page>
      <FloatingActionButton icon={faPlus} onClick={() => {}} />
    </MinimalMenu.Page>
  </>
);

export default {
  title: 'Components/FloatingActionButton',
  component: FloatingActionButton,
} as Meta;
