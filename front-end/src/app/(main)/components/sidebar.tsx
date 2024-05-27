import { FC } from 'react';
import { ShortsRegular, ShortsSolid, SubscriptionsRegular, SubscriptionsSolid, WeTubeLogo } from '@/components/icons';
import { Drawer, IconButton, Stack } from '@mui/material';
import { AiOutlineMenu } from 'react-icons/ai';
import NavList, { NavListProps } from './nav-list';
import Link from 'next/link';
import { GoHome, GoHomeFill } from 'react-icons/go';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div className="w-60 min-h-full bg-dark">
        <Stack>
          <div className="flex items-center gap-4 h-14 pl-4">
            <IconButton onClick={onClose}>
              <AiOutlineMenu />
            </IconButton>
            <Link href="/" className="flex items-center gap-1 font-bold -tracking-widest text-2xl" onClick={onClose}>
              <WeTubeLogo width={29} height={20} />
              WeTube
            </Link>
          </div>
          <div>
            {NAV_LIST.map((list, index) => (
              <NavList key={index} subheader={list.subheader} items={list.items} onClose={onClose} />
            ))}
          </div>
        </Stack>
      </div>
    </Drawer>
  );
};

const NAV_LIST: NavListProps[] = [
  {
    items: [
      {
        text: 'Trang chủ',
        href: '/',
        icon: <GoHome size={24} />,
        activeIcon: <GoHomeFill size={24} />,
      },
      {
        text: 'Shorts',
        href: '/shorts',
        icon: <ShortsRegular size={24} />,
        activeIcon: <ShortsSolid size={24} />,
      },
      {
        text: 'Kênh đăng ký',
        href: '/feed/subscriptions',
        icon: <SubscriptionsRegular size={24} />,
        activeIcon: <SubscriptionsSolid size={24} />,
      },
    ],
  },
  {
    subheader: 'Kênh đăng ký',
    items: [],
  },
];

export default Sidebar;
