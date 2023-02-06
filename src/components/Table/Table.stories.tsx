import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { Card, ProfileImage, Table } from '../..';

/* eslint-disable @typescript-eslint/no-empty-function */

const fakeData = [
  {
    count: 57,
    name: 'Hungry Caterpillar',
  },
  {
    count: 32,
    name: 'Fainting Lama',
  },
  {
    count: 53,
    name: 'Hungry Bear',
  },
  {
    count: 24,
    name: 'Panicking Squirrel',
  },
  {
    count: 12,
    name: 'High Hedgehog',
  },
  {
    count: 76,
    name: 'Lazy Tiger',
  },
  {
    count: 34,
    name: 'Wild Antelope',
  },
];

const items = [
  {
    label: 'Angry Lama',
    onClick: () => {
      console.log('Item 1 clicked');
    },
  },
  {
    label: 'Frightened Frog',
    onClick: () => {
      console.log('Item 2 clicked');
    },
  },
  {
    label: 'Hungry Bear',
    onClick: () => {
      console.log('Item 3 clicked');
    },
  },
  {
    label: 'Crazy Koala',
    onClick: () => {
      console.log('Item 4 clicked');
    },
  },
  {
    label: 'Dizzy Snake',
    onClick: () => {
      console.log('Item 5 clicked');
    },
  },
];

export const Standard = () => (
  <Table>
    <Table.Row>
      <Table.Cell variant='tight'>
        <ProfileImage name='Hungry Caterpillar' />
      </Table.Cell>
      <Table.Cell width='100%'>Hungry Caterpillar</Table.Cell>
      <Table.Cell>Ready</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell variant='tight'>
        <ProfileImage name='Fainting Lama' />
      </Table.Cell>
      <Table.Cell width='100%'>Fainting Lama</Table.Cell>
      <Table.Cell>Pending</Table.Cell>
    </Table.Row>
  </Table>
);

export const WithActions = () => (
  <Table>
    {fakeData.map((data) => (
      <Table.Row key={data.name}>
        <Table.Cell>{data.count}</Table.Cell>
        <Table.Cell>{data.name}</Table.Cell>
        <Table.Cell>
          <Table.ActionContainer>
            <Table.Action onClick={() => {}} text='filter' />
            <Table.ActionMenu items={items} />
          </Table.ActionContainer>
        </Table.Cell>
      </Table.Row>
    ))}
  </Table>
);

export const InCard = () => (
  <Card padded size='sm'>
    <Table>
      <Table.Row>
        <Table.Cell variant='tight'>
          <ProfileImage name='Hungry Caterpillar' />
        </Table.Cell>
        <Table.Cell>Hungry Caterpillar</Table.Cell>
        <Table.Cell>Ready</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell variant='tight'>
          <ProfileImage name='Fainting Lama' />
        </Table.Cell>
        <Table.Cell>Fainting Lama</Table.Cell>
        <Table.Cell>Pending</Table.Cell>
      </Table.Row>
    </Table>
  </Card>
);

export const InContentCard = () => (
  <Card size='sm'>
    <Card.Header heading='Sed do eiusmod' subHeading='Labore et dolore magna' />
    <Card.Content>
      <Table variant='soft'>
        <Table.Row>
          <Table.Cell>Hungry Caterpillar</Table.Cell>
          <Table.Cell>Ready</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Fainting Lama</Table.Cell>
          <Table.Cell>Pending</Table.Cell>
        </Table.Row>
      </Table>
    </Card.Content>
  </Card>
);

export default {
  title: 'Components/Table',
  component: Table,
} as Meta;
