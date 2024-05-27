import { Components, Theme } from '@mui/material/styles';
import { darkModePalette, lightModePalette } from '../palette';

const getSelectedBackgroundColor = (theme: Theme) => {
  if (theme.palette.mode === 'dark') {
    return theme.palette.primary.light;
  } else {
    return theme.palette.primary.main;
  }
};

export const MuiListItemButton: Components<Theme>['MuiListItemButton'] = {
  styleOverrides: {
    root: ({ theme }) => {
      return {
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
        '&.Mui-selected': {
          background: theme.palette.primary.light,
          '&:hover': {
            background: theme.palette.primary.light,
          },
        },
      };
    },
  },
};
