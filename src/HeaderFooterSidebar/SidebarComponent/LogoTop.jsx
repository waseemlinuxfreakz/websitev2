import React from 'react';
import Logo from '../../assets/img/Emmet-logo.svg';
import './Sidebar.css';
import NetworkSwitch from '../NetworkSwitch/NetworkSwitch';

function LogoTop() {
    return ( 
        <div className="sidebarTopLogo">
            <a href="/" className='NavBrand'><img src={Logo} alt="Logo" className='' /></a>
            < NetworkSwitch />
        </div>
     );
}

export default LogoTop;