import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Themes } from '../..';
import BodyStyle from '../../global/BodyStyle.component';

export interface DarkThemeProviderProps {
  children: React.ReactNode;
}

const DarkThemeProvider = ({ children }: DarkThemeProviderProps) => (
  <ThemeProvider theme={Themes.dark}>
    <BodyStyle />
    {children}
  </ThemeProvider>
);

export default DarkThemeProvider;
