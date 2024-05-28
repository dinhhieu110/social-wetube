'use client';
import { Avatar, Button, IconButton, Tooltip } from '@mui/material';
import { AiOutlineMenu } from 'react-icons/ai';
import Search from './search';
import { BellRegular, BellSolid, CameraPlus, WeTubeLogo } from '@/components/icons';
import { useState } from 'react';
import Sidebar from './sidebar';
import Link from 'next/link';
import { useAuth } from '@/hooks';

const Header = () => {
  const { user, logout } = useAuth();
  const [showNotification, setShowNotification] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpen = () => {
    setOpenSidebar(true);
  };

  const handleClose = () => {
    setOpenSidebar(false);
  };

  return (
    <header className="bg-white dark:text-white dark:bg-dark">
      <div className="flex justify-between items-center px-4 h-14">
        <div className="flex items-center gap-4">
          <IconButton onClick={handleOpen}>
            <AiOutlineMenu />
          </IconButton>
          <Link href="/" className="flex items-center gap-1 font-bold -tracking-widest text-2xl">
            <WeTubeLogo width={29} height={20} />
            WeTube
          </Link>
        </div>
        <Search />
        {user ? (
          <div className="flex items-center gap-3">
            <Tooltip title="Tạo">
              <IconButton>
                <CameraPlus />
              </IconButton>
            </Tooltip>
            <Tooltip title="Thông báo">
              <IconButton onClick={() => setShowNotification(!showNotification)}>
                {showNotification ? <BellSolid /> : <BellRegular />}
              </IconButton>
            </Tooltip>
            <IconButton onClick={async () => await logout()}>
              <Avatar src={user?.avatar || '/goku.png'} sx={{ width: 32, height: 32 }} />
            </IconButton>
          </div>
        ) : (
          <Button component={Link} href="/login">
            Đăng nhập
          </Button>
        )}
      </div>
      <Sidebar open={openSidebar} onClose={handleClose} />
    </header>
  );
};

export default Header;
