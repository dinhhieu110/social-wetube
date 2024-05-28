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
      textTransform: 'unset',
    },
  },
  variants: [
    {
      props: { size: 'small' },
      style: {
        height: 30,
        fontSize: '0.75rem',
        paddingInline: 8,
        paddingBlock: 4,
      },
    },
    {
      props: { size: 'medium' },
      style: {
        height: 36,
        fontSize: '0.875rem',
        paddingInline: 12,
        paddingBlock: 6,
      },
    },
    {
      props: { size: 'large' },
      style: {
        height: 48,
        fontSize: '1rem',
        fontWeight: 700,
        paddingInline: 16,
        paddingBlock: 8,
      },
    },
    {
      props: { color: 'primary', variant: 'contained' },
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
