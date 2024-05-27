import { List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Link from 'next/link';
import { GoHome } from 'react-icons/go';

const NavList = () => {
  return (
    <List className="p-3" component="nav">
      <NavItem />
    </List>
  );
};

const NavItem = () => {
  return (
    <ListItemButton component={Link} href="/">
      <ListItemIcon>
        <GoHome size={24} />
      </ListItemIcon>
      <ListItemText primary={<Typography fontSize={14}>Trang chủ</Typography>} />
    </ListItemButton>
  );
};

export default NavList;
