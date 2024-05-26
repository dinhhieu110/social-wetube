import { createTheme } from '@mui/material';
import { darkModePalette, lightModePalette } from './palette';
import { typography } from './typography';

export enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
}

export const theme = (mode: ThemeMode) => {
  return createTheme({
    typography,
    palette: { mode, ...(mode === ThemeMode.Light ? lightModePalette : darkModePalette) },
  });
};
