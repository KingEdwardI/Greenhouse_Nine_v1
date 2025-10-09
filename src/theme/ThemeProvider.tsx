import React from 'react';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import '../styles/reset.css';
import './radix-overrides.css';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <Theme 
      appearance="dark" 
      accentColor="green" 
      grayColor="gray"
      radius="medium"
      scaling="100%"
    >
      {children}
    </Theme>
  );
};