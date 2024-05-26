'use client';
import { Avatar, IconButton } from '@mui/material';
import { AiOutlineMenu } from 'react-icons/ai';
import Search from './search';
import { BellRegular, BellSolid, CameraPlus } from '@/components/icons';
import { useState } from 'react';

const Header = () => {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <header className="bg-white dark:text-white dark:bg-dark">
      <div className="flex justify-between items-center px-4 h-14">
        <IconButton>
          <AiOutlineMenu />
        </IconButton>
        <Search />
        <div className="flex items-center gap-3">
          <IconButton>
            <CameraPlus />
          </IconButton>
          <IconButton onClick={() => setShowNotification(!showNotification)}>
            {showNotification ? <BellSolid /> : <BellRegular />}
          </IconButton>
          <IconButton>
            <Avatar sx={{ width: 32, height: 32 }} />
          </IconButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
