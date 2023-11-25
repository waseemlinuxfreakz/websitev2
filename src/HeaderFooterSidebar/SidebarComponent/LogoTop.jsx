import React from 'react';
import Logo from '../../assets/img/Emmet-logo.svg';
import NetworkSwitch from '../NetworkSwitch/NetworkSwitch.jsx'

function LogoTop() {
    return ( 
        <div className="sidebarTopLogo">
            <a href="/" className='NavBrand'><img src={Logo} alt="Logo" className='' /></a>
            <NetworkSwitch />
        </div>
     );
}

export default LogoTop;