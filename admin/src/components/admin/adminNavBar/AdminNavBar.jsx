import './AdminNavBar.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import CastIcon from '@mui/icons-material/Cast';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import KeyIcon from '@mui/icons-material/Key';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const AdminNavBar = () => {
  const [isPopuped, setIsPopuped] = useState(false);
  const popup = () => {
    setIsPopuped(!isPopuped);
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">Dashboard</span>
        </Link>
        <HomeOutlinedIcon />
        <CastIcon />
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <NotificationsOutlinedIcon />
        <div className="info" onClick={popup}>
          <img src="/images/avatar.jpg" alt="admin_img" />
          <span>Willson Tran</span>
        </div>
        {isPopuped && (
          <div className="popupBox">
            <button className="edit-btn">
              <ModeEditOutlineIcon /> Edit Profile
            </button>
            <button className="pass-btn">
              <KeyIcon /> Change Password
            </button>
            <button style={{ paddingRight: '10px' }} className="logout-btn">
              <LogoutIcon /> Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNavBar;
