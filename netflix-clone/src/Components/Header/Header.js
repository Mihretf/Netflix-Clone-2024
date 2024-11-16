import React from 'react';
import './header.css';
import NetflixLogo from '../../assets/images/NetflixLogo.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        {/* Left Section: Logo + Navigation Links */}
        <div className="header_left">
          <img src={NetflixLogo} alt="Netflix Logo" />
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My Lists</li>
            <li>Browse my languages</li>
          </ul>
        </div>

        {/* Right Section: Icons */}
        <div className="header_right">
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
