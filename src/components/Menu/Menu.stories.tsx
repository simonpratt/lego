import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import {
  ControlGroup,
  Heading,
  Menu,
  Spacer,
  Text,
  FocusLayout,
  PaddedLayout,
  Input,
  Button,
  menuHelpers,
} from '../..';
import { faCalendarAlt, faCogs, faHamburger } from '@fortawesome/free-solid-svg-icons';
import SubHeading from '../SubHeading/SubHeading.component';

export const Standard = () => {
  const [route, setRoute] = useState('/eat');

  return (
    <>
      <Menu>
        <Menu.Heading>Something Tasty</Menu.Heading>
        <Menu.Item
          icon={faHamburger}
          active={menuHelpers.isActiveItem([/\/eat/g], route)}
          onClick={() => setRoute('/eat')}
        >
          Eat
        </Menu.Item>
        <Menu.Item
          icon={faCalendarAlt}
          active={menuHelpers.isActiveItem([/\/plan/g], route)}
          onClick={() => setRoute('/plan')}
        >
          Plan
        </Menu.Item>
        <Menu.Item
          icon={faCogs}
          active={menuHelpers.isActiveItem([/\/manage/g], route)}
          onClick={() => setRoute('/manage')}
        >
          Manage
        </Menu.Item>
      </Menu>
      <Menu.Content>
        <Menu.Page>
          <FocusLayout>
            <Heading>Configuration</Heading>
            <Spacer size='4x' />
            <ControlGroup variation='submission'>
              <Text>Enter your name here. This will be used to identify you when connecting with friends.</Text>
              <ControlGroup.Spacer />
              <Input name='name' placeholder='name' />
              <ControlGroup.Spacer />
              <Button>Next</Button>
            </ControlGroup>
          </FocusLayout>
        </Menu.Page>
      </Menu.Content>
    </>
  );
};

export const WithPanel = () => {
  const [route, setRoute] = useState('/eat');

  return (
    <>
      <Menu>
        <Menu.Heading>Something Tasty</Menu.Heading>
        <Menu.Item
          icon={faHamburger}
          active={menuHelpers.isActiveItem([/\/eat/g], route)}
          onClick={() => setRoute('/eat')}
        >
          Eat
        </Menu.Item>
        <Menu.Item
          icon={faCalendarAlt}
          active={menuHelpers.isActiveItem([/\/plan/g], route)}
          onClick={() => setRoute('/plan')}
        >
          Plan
        </Menu.Item>
        <Menu.Item
          icon={faCogs}
          active={menuHelpers.isActiveItem([/\/manage/g], route)}
          onClick={() => setRoute('/manage')}
        >
          Manage
        </Menu.Item>
      </Menu>
      <Menu.Content panelSize='md'>
        <Menu.Panel>
          <PaddedLayout>
            <ControlGroup variation='comfortable'>
              <SubHeading>You</SubHeading>
              <Input label='Income' name='name' placeholder='30,000' />
              <SubHeading>Loan</SubHeading>
              <Input label='Deposit' name='name' placeholder='10,000' />
              <Input label='Interest Rate' name='name' placeholder='4%' />
            </ControlGroup>
          </PaddedLayout>
        </Menu.Panel>
        <Menu.Page>
          <FocusLayout>
            <Heading>Configuration</Heading>
            <Spacer size='4x' />
            <ControlGroup variation='submission'>
              <Text>Enter your name here. This will be used to identify you when connecting with friends.</Text>
              <ControlGroup.Spacer />
              <Input name='name' placeholder='name' />
              <ControlGroup.Spacer />
              <Button>Next</Button>
            </ControlGroup>
          </FocusLayout>
        </Menu.Page>
      </Menu.Content>
    </>
  );
};

export default {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;
