import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../components/defaultTheme';

export default function Wrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
