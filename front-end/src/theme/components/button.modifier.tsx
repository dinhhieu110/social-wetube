import { Components, Theme } from '@mui/material/styles';

export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    color: 'primary',
    variant: 'contained',
    disableElevation: true,
  },
  styleOverrides: {
    root: {
      borderRadius: 9999999,
      fontWeight: 500,
      fontSize: '0.875rem',
      textTransform: 'unset',
    },
  },
  variants: [
    {
      props: { color: 'primary' },
      style: ({ theme }) => {
        const {
          palette: {
            primary: { light },
          },
        } = theme;
        return {
          '&:hover': {
            backgroundColor: light,
          },
        };
      },
    },
  ],
};
