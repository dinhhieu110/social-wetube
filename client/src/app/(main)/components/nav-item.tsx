'use client';
import { FC, MouseEventHandler, ReactNode } from 'react';
import { ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NavItemProps {
  text: string;
  icon: ReactNode;
  href: string;
  activeIcon?: ReactNode;
  onClick?: MouseEventHandler;
}

const NavItem: FC<NavItemProps> = ({ icon, text, href, activeIcon, onClick }) => {
  const pathname = usePathname();
  const isMatchRoute = pathname === href;

  return (
    <ListItemButton component={Link} href={href} selected={isMatchRoute} onClick={onClick} title={text}>
      <ListItemIcon>{isMatchRoute && activeIcon ? activeIcon : icon}</ListItemIcon>
      <ListItemText
        primary={
          <Typography fontSize={14} fontWeight={isMatchRoute ? 700 : 400}>
            {text}
          </Typography>
        }
      />
    </ListItemButton>
  );
};

export default NavItem;
