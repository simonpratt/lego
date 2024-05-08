import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { FloatingActionButton, MinimalMenu } from '../..';
import { faDiceFour, faDiceOne, faDiceThree, faDiceTwo, faPencil, faPlus } from '@fortawesome/free-solid-svg-icons';

export const Standard = () => {
  const [tab, setTab] = useState(1);
  return (
    <>
      <FloatingActionButton.Provider>
        <MinimalMenu>
          <MinimalMenu.Item icon={faDiceOne} label='One' active={false} onClick={() => setTab(1)} />
          <MinimalMenu.Item icon={faDiceTwo} label='Two' active={false} onClick={() => setTab(2)} />
          <MinimalMenu.Item icon={faDiceThree} label='Three' active={false} onClick={() => setTab(3)} />
          <MinimalMenu.Item icon={faDiceFour} label='Four' active={false} onClick={() => setTab(4)} />
        </MinimalMenu>
        <MinimalMenu.Page>
          {tab === 1 && <FloatingActionButton icon={faPlus} onClick={() => {}} />}
          {tab === 2 && <FloatingActionButton icon={faPlus} onClick={() => {}} />}
          {tab === 3 && <FloatingActionButton icon={faPencil} variant='tertiary' onClick={() => {}} />}
        </MinimalMenu.Page>
      </FloatingActionButton.Provider>
    </>
  );
};

export const NoProvider = () => {
  const [tab, setTab] = useState(1);
  return (
    <>
      <MinimalMenu>
        <MinimalMenu.Item icon={faDiceOne} label='One' active={false} onClick={() => setTab(1)} />
        <MinimalMenu.Item icon={faDiceTwo} label='Two' active={false} onClick={() => setTab(2)} />
        <MinimalMenu.Item icon={faDiceThree} label='Three' active={false} onClick={() => setTab(3)} />
        <MinimalMenu.Item icon={faDiceFour} label='Four' active={false} onClick={() => setTab(4)} />
      </MinimalMenu>
      <MinimalMenu.Page>
        {tab === 1 && <FloatingActionButton icon={faPlus} onClick={() => {}} />}
        {tab === 2 && <FloatingActionButton icon={faPlus} onClick={() => {}} />}
        {tab === 3 && <FloatingActionButton icon={faPencil} variant='tertiary' onClick={() => {}} />}
      </MinimalMenu.Page>
    </>
  );
};

export default {
  title: 'Components/FloatingActionButton',
  component: FloatingActionButton,
} as Meta;
