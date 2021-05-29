import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ProfileImage } from '../..';

export const Standard = () => (
  <ProfileImage
    name='Hungry Bear'
    image='https://i.guim.co.uk/img/media/86c3481516dce247943ac2978b4f48d16a3ac265/0_170_5120_3074/master/5120.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=637dc5731d52754675ef36344a6af3c8'
  />
);

export const Generated = () => <ProfileImage name='Hungry Bear' />;

export default {
  title: 'Components/ProfileImage',
  component: ProfileImage,
} as Meta;
