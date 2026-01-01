import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { ControlGroup, TagSelect, Form } from '../..';
import { TagOption } from './TagSelect.component';

const tagOptions: TagOption[] = [
  {
    value: 'urgent',
    label: 'Urgent',
    variant: 'danger',
  },
  {
    value: 'important',
    label: 'Important',
    variant: 'warn',
  },
  {
    value: 'review',
    label: 'Needs Review',
    variant: 'info',
  },
  {
    value: 'approved',
    label: 'Approved',
    variant: 'success',
  },
  {
    value: 'in-progress',
    label: 'In Progress',
    variant: 'info',
  },
  {
    value: 'blocked',
    label: 'Blocked',
    variant: 'danger',
  },
  {
    value: 'done',
    label: 'Done',
    variant: 'success',
  },
  {
    value: 'pending',
    label: 'Pending',
    variant: 'warn',
  },
];

export const Standard = () => {
  const [value, setValue] = useState({ tags: [] });

  return (
    <Form value={value} onChange={setValue}>
      <ControlGroup variation='comfortable'>
        <TagSelect
          name='tags'
          label='Task Tags'
          placeholder='Select or add tags...'
          description='Select existing tags or create new ones by typing and pressing Enter'
          options={tagOptions}
        />
      </ControlGroup>
    </Form>
  );
};

export const WithPreselectedTags = () => {
  const [value, setValue] = useState({ tags: ['urgent', 'in-progress'] });

  return (
    <Form value={value} onChange={setValue}>
      <ControlGroup variation='comfortable'>
        <TagSelect
          name='tags'
          label='Task Tags'
          placeholder='Select or add tags...'
          description='This example starts with pre-selected tags'
          options={tagOptions}
        />
      </ControlGroup>
    </Form>
  );
};

export const WithoutNewTags = () => {
  const [value, setValue] = useState({ tags: [] });

  return (
    <Form value={value} onChange={setValue}>
      <ControlGroup variation='comfortable'>
        <TagSelect
          name='tags'
          label='Task Tags'
          placeholder='Select tags...'
          description='This example does not allow creating new tags'
          options={tagOptions}
          allowNewTags={false}
        />
      </ControlGroup>
    </Form>
  );
};

export const CustomNewTagVariant = () => {
  const [value, setValue] = useState({ tags: [] });

  return (
    <Form value={value} onChange={setValue}>
      <ControlGroup variation='comfortable'>
        <TagSelect
          name='tags'
          label='Task Tags'
          placeholder='Select or add tags...'
          description='New tags will be created with the "success" variant by default'
          options={tagOptions}
          newTagVariant='success'
        />
      </ControlGroup>
    </Form>
  );
};

export const MultipleTags = () => {
  const [value, setValue] = useState({
    projectTags: ['urgent', 'approved'],
    featureTags: ['in-progress'],
  });

  return (
    <Form value={value} onChange={setValue}>
      <ControlGroup variation='comfortable'>
        <TagSelect
          name='projectTags'
          label='Project Tags'
          placeholder='Select or add project tags...'
          description='Tags for the overall project status'
          options={tagOptions}
        />
        <TagSelect
          name='featureTags'
          label='Feature Tags'
          placeholder='Select or add feature tags...'
          description='Tags for individual features'
          options={tagOptions}
          newTagVariant='warn'
        />
      </ControlGroup>
    </Form>
  );
};

export default {
  title: 'Forms/TagSelect',
  component: TagSelect,
} as Meta;
