import { Components, Theme } from '@mui/material/styles';

export const MuiIconButton: Components<Theme>['MuiIconButton'] = {
  variants: [
    {
      props: { color: 'primary' },
      style: ({ theme }) => {
        const {
          palette: {
            primary: { main, light, contrastText },
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
