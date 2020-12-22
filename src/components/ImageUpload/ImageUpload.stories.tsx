import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ImageUpload, Spacer } from '../..';
import colours from '../../colours/colours';

export const FormMode = () => (
  <>
    <ImageUpload name='profile' mode='form' />
  </>
);

export const FillMode = () => (
  <>
    <Spacer size='2x' />
    <div style={{ width: '600px', height: '300px', padding: '30px', backgroundColor: colours.grey20 }}>
      <ImageUpload name='profile' mode='fill' />
    </div>
  </>
);

export default {
  title: 'Components/ImageUpload',
  component: ImageUpload,
} as Meta;
