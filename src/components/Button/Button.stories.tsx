import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { faCog } from '@fortawesome/free-solid-svg-icons';
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

export const Sizes = () => (
  <>
    <Button size='sm'>Here is a small button!</Button>
    <br />
    <br />
    <Button size='md'>Here is a medium/default button!</Button>
  </>
);

export const Icons = () => (
  <>
    <Button size='sm' icon={faCog}>
      Small icon button
    </Button>
    <Button size='sm' variant='secondary' icon={faCog}>
      Small icon button
    </Button>
    <Button size='sm' variant='tertiary' icon={faCog}>
      Small icon button
    </Button>
    <br />
    <br />
    <Button size='md' icon={faCog}>
      Medium icon button
    </Button>
    <Button size='md' variant='secondary' icon={faCog}>
      Medium icon button
    </Button>
    <Button size='md' variant='tertiary' icon={faCog}>
      Medium icon button
    </Button>
    <br />
    <br />
    <Button size='md' icon={faCog}></Button>
    <Button size='md' variant='secondary' icon={faCog}></Button>
    <Button size='md' variant='tertiary' icon={faCog}></Button>
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
    <br />
    <br />
    <Button size='sm' loading>
      Here is a small button!
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
