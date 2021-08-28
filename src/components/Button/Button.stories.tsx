import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Button } from '../..';

export const Standard = () => (
  <>
    <Button>Here is a primary button!</Button>
    <br />
    <br />
    <Button variant='secondary'>Here is a secondary button!</Button>
    <br />
    <br />
    <Button variant='tertiary'>Here is a tertiary button!</Button>
  </>
);

export const Loading = () => (
  <>
    <Button loading>Here is a primary button!</Button>
    <br />
    <br />
    <Button variant='secondary' loading>
      Here is a secondary button!
    </Button>
  </>
);

export const InteractiveLoading = () => {
  const [loading, setLoading] = useState(false);

  const handleLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <Button loading={loading} onClick={handleLoad}>
      Click me to load!
    </Button>
  );
};

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;
