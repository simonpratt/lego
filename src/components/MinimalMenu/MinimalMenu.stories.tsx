import { Meta } from '@storybook/react/types-6-0';
import React, { useEffect, useState } from 'react';
import { faCalendarAlt, faCogs, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { Button, CenteredLayout, Heading, menuHelpers, MinimalMenu, PaddedLayout, Spacer } from '../..';
import LoremIpsum from '../../storyHelpers/LoremIpsum';

export const Standard = () => {
  const [route, setRoute] = useState('/eat');

  return (
    <>
      <MinimalMenu>
        <MinimalMenu.Item
          icon={faHamburger}
          active={menuHelpers.isActiveItem([/\/eat/g], route)}
          onClick={() => setRoute('/eat')}
        />
        <MinimalMenu.Item
          icon={faCalendarAlt}
          active={menuHelpers.isActiveItem([/\/plan/g], route)}
          onClick={() => setRoute('/plan')}
        />
        <MinimalMenu.Item
          icon={faCogs}
          active={menuHelpers.isActiveItem([/\/manage/g], route)}
          onClick={() => setRoute('/manage')}
        />
      </MinimalMenu>
      <MinimalMenu.Page>
        <MinimalMenu.Header text='App 01' rightContent={<Button size='sm'>Save</Button>} />
        <PaddedLayout>
          <LoremIpsum />
        </PaddedLayout>
      </MinimalMenu.Page>
    </>
  );
};

export const ShowAndHideMenu = () => {
  const [route, setRoute] = useState('/eat');
  const [counterValue, setCounterValue] = useState(0);
  const [menuHidden, setMenuHidden] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCounterValue(counterValue + 100);
    }, 100);
  }, [counterValue, setCounterValue]);

  return (
    <>
      {!menuHidden && (
        <MinimalMenu>
          <MinimalMenu.Item
            icon={faHamburger}
            active={menuHelpers.isActiveItem([/\/eat/g], route)}
            onClick={() => setRoute('/eat')}
          />
          <MinimalMenu.Item
            icon={faCalendarAlt}
            active={menuHelpers.isActiveItem([/\/plan/g], route)}
            onClick={() => setRoute('/plan')}
          />
          <MinimalMenu.Item
            icon={faCogs}
            active={menuHelpers.isActiveItem([/\/manage/g], route)}
            onClick={() => setRoute('/manage')}
          />
        </MinimalMenu>
      )}
      <MinimalMenu.Page hiddenMenu={menuHidden}>
        <PaddedLayout>
          <Heading.SubHeading>
            You should be able to hide the menu without loosing state on the page...
          </Heading.SubHeading>
        </PaddedLayout>
        <CenteredLayout>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Spacer size='4x' />
            <Heading>{counterValue}</Heading>
            <Spacer size='2x' />
            <Button onClick={() => setMenuHidden(!menuHidden)}>Toggle Menu</Button>
          </div>
        </CenteredLayout>
        <PaddedLayout>
          <LoremIpsum />
        </PaddedLayout>
      </MinimalMenu.Page>
    </>
  );
};

export default {
  title: 'Components/MinimalMenu',
  component: MinimalMenu,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;
