import React from 'react';

export const themes = {
  light: {
    foreground: '#f83',
    background: '#f2f399',
  },
  dark: {
    foreground: '#ffffff',
    background: '#123456',
  },
};

export const DynamicThemeContext = React.createContext(
  themes.dark
);