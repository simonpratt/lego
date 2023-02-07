import * as React from 'react';
import { DarkThemeProvider } from '../src';

export const decorators = [
  (Story) => (
    <>
      <DarkThemeProvider>
        <Story />
      </DarkThemeProvider>
    </>
  ),
];
