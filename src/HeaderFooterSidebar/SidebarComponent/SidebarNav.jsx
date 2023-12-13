import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import NavIcon1 from '../../assets/img/nav-icon/nav-Icons-1.svg';
import NavIcon2 from '../../assets/img/nav-icon/nav-Icons-2.svg';
import NavIcon3 from '../../assets/img/nav-icon/nav-Icons-3.svg';
import NavIcon4 from '../../assets/img/nav-icon/nav-Icons-4.svg';
import NavIcon5 from '../../assets/img/nav-icon/nav-Icons-5.svg';
import NavIcon6 from '../../assets/img/nav-icon/nav-Icons-6.svg';
import NavIcon7 from '../../assets/img/nav-icon/nav-Icons-7.svg';

function SidebarNav() {
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  const handleLinkClick = () => {
    document.body.classList.remove('activeMobileMenu');
  };

  return (
    <div className="sidebarNav">
      <ul className="navlinks">
        <li>
          <Link to="/" className={`navLink ${isActive('/') && 'active'}`} onClick={handleLinkClick}>
            <img src={NavIcon1} alt="NavIcon" />
            <span>Swap</span>
          </Link>
        </li>
        <li>
          <Link to="/bridge" className={`navLink ${isActive('/bridge') && 'active'}`} onClick={handleLinkClick}>
            <img src={NavIcon2} alt="NavIcon" />
            <span>Bridge</span>
          </Link>
        </li>
        <li>
          <Link to="/explorer" className={`navLink ${isActive('/explorer') && 'active'}`} onClick={handleLinkClick}>
            <img src={NavIcon3} alt="NavIcon" />
            <span>Explorer</span>
          </Link>
        </li>
        <li>
          <Link to="/" className={`navLink ${isActive('/') && ''}`} onClick={handleLinkClick}>
            <img src={NavIcon4} alt="NavIcon" />
            <span>Farm</span>
            <span className="soon">Soon</span>
          </Link>
        </li>
        <li>
          <Link to="/" className={`navLink ${isActive('/') && ''}`} onClick={handleLinkClick}>
            <img src={NavIcon5} alt="NavIcon" />
            <span>Loans</span>
            <span className="soon">Soon</span>
          </Link>
        </li>
        <li>
          <Link to="/" className={`navLink ${isActive('/') && ''}`} onClick={handleLinkClick}>
            <img src={NavIcon6} alt="NavIcon" />
            <span>Stake</span>
            <span className="soon">Soon</span>
          </Link>
        </li>
        <li>
          <Link to="/" className={`navLink ${isActive('/') && ''}`} onClick={handleLinkClick}>
            <img src={NavIcon7} alt="NavIcon" />
            <span>Governance</span>
            <span className="soon">Soon</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SidebarNav;
