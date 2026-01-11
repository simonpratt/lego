import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { FloatingActionButton, MinimalMenu } from '../..';
import {
  faDiceFour,
  faDiceOne,
  faDiceThree,
  faDiceTwo,
  faPencil,
  faPlus,
  faEdit,
  faShare,
  faTrash,
  faCopy,
} from '@fortawesome/free-solid-svg-icons';

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
          {tab === 1 && <FloatingActionButton icon={faPlus} onClick={() => {}} label='Add' />}
          {tab === 2 && <FloatingActionButton icon={faPlus} onClick={() => {}} label='Add' />}
          {tab === 3 && <FloatingActionButton icon={faPencil} variant='tertiary' onClick={() => {}} label='Edit' />}
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

export const WithSecondaryActions = () => {
  const [tab, setTab] = useState(1);
  return (
    <>
      <FloatingActionButton.Provider>
        <MinimalMenu>
          <MinimalMenu.Item icon={faDiceOne} label='One' active={tab === 1} onClick={() => setTab(1)} />
          <MinimalMenu.Item icon={faDiceTwo} label='Two' active={tab === 2} onClick={() => setTab(2)} />
          <MinimalMenu.Item icon={faDiceThree} label='Three' active={tab === 3} onClick={() => setTab(3)} />
        </MinimalMenu>
        <MinimalMenu.Page>
          {tab === 1 && (
            <>
              <FloatingActionButton icon={faPlus} label='Add' onClick={() => console.log('Primary clicked')} />
              <FloatingActionButton.Secondary icon={faEdit} label='Edit' onClick={() => console.log('Edit clicked')} />
              <FloatingActionButton.Secondary
                icon={faShare}
                label='Share'
                onClick={() => console.log('Share clicked')}
              />
            </>
          )}
          {tab === 2 && (
            <>
              <FloatingActionButton icon={faPencil} onClick={() => console.log('Primary clicked')} variant='tertiary' />
              <FloatingActionButton.Secondary
                icon={faCopy}
                label='Duplicate'
                onClick={() => console.log('Duplicate clicked')}
                variant='secondary'
              />
            </>
          )}
          {tab === 3 && (
            <>
              <FloatingActionButton icon={faPlus} onClick={() => console.log('Primary clicked')} />
            </>
          )}
        </MinimalMenu.Page>
      </FloatingActionButton.Provider>
    </>
  );
};

export const SecondaryWithoutLabels = () => {
  return (
    <>
      <FloatingActionButton.Provider>
        <FloatingActionButton icon={faPlus} onClick={() => console.log('Create')} />
        <FloatingActionButton.Secondary icon={faEdit} onClick={() => console.log('Edit')} />
        <FloatingActionButton.Secondary icon={faTrash} onClick={() => console.log('Delete')} variant='secondary' />
      </FloatingActionButton.Provider>
    </>
  );
};

export const ManySecondaries = () => {
  return (
    <>
      <FloatingActionButton.Provider>
        <MinimalMenu>
          <MinimalMenu.Item icon={faDiceOne} label='One' active={false} onClick={() => {}} />
        </MinimalMenu>
        <MinimalMenu.Page>
          <FloatingActionButton icon={faPlus} onClick={() => console.log('Create')} />
          <FloatingActionButton.Secondary icon={faEdit} label='Edit' onClick={() => {}} />
          <FloatingActionButton.Secondary icon={faShare} label='Share' onClick={() => {}} />
          <FloatingActionButton.Secondary icon={faCopy} label='Duplicate' onClick={() => {}} />
          <FloatingActionButton.Secondary icon={faTrash} label='Delete' onClick={() => {}} variant='secondary' />
        </MinimalMenu.Page>
      </FloatingActionButton.Provider>
    </>
  );
};

export default {
  title: 'Components/FloatingActionButton',
  component: FloatingActionButton,
} as Meta;
