import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Card, ProfileImage, Table } from '../..';

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
