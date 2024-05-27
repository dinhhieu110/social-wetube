import { Components, Theme } from '@mui/material/styles';

export const MuiListItemButton: Components<Theme>['MuiListItemButton'] = {
  styleOverrides: {
    root: {
      minHeight: 40,
      borderRadius: 10,
      paddingBottom: 4,
      paddingTop: 4,

      '.MuiListItemIcon-root': {
        minWidth: 48,
      },
      '.MuiListItemText-root': {
        fontSize: '0.875rem',
      },
    },
  },
};
