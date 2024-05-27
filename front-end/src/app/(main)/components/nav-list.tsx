import { FC, MouseEventHandler } from 'react';
import { List, ListSubheader } from '@mui/material';
import NavItem, { NavItemProps } from './nav-item';

export interface NavListProps {
  items: NavItemProps[];
  subheader?: string;
  onClose?: MouseEventHandler;
}

const NavList: FC<NavListProps> = ({ items, subheader, onClose }) => {
  return (
    <List
      className="p-3"
      component="nav"
      subheader={
        subheader && (
          <ListSubheader component="h6" color="inherit" sx={{ fontSize: 16, fontWeight: 700 }}>
            {subheader}
          </ListSubheader>
        )
      }
    >
      {items.map((item, index) => (
        <NavItem
          key={index}
          text={item.text}
          href={item.href}
          icon={item.icon}
          activeIcon={item.activeIcon}
          onClick={onClose}
        />
      ))}
    </List>
  );
};

export default NavList;
