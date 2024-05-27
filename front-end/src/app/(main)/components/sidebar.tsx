import { FC } from 'react';
import { WeTubeLogo } from '@/components/icons';
import { Drawer, IconButton, Stack } from '@mui/material';
import { AiOutlineMenu } from 'react-icons/ai';
import NavList from './nav-list';

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
            <span className="flex items-center gap-1 font-bold -tracking-widest text-2xl">
              <WeTubeLogo width={29} height={20} />
              WeTube
            </span>
          </div>
          <div>
            <NavList />
          </div>
        </Stack>
      </div>
    </Drawer>
  );
};

export default Sidebar;
