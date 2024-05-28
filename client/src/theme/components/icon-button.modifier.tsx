import { Components, Theme } from '@mui/material/styles';

export const MuiIconButton: Components<Theme>['MuiIconButton'] = {
  variants: [
    {
      props: { color: 'secondary' },
      style: ({ theme }) => {
        const {
          palette: {
            secondary: { main, light, contrastText },
          },
        } = theme;
        return {
          backgroundColor: main,
          color: contrastText,
          '&:hover': {
            backgroundColor: light,
          },
        };
      },
    },
  ],
};
