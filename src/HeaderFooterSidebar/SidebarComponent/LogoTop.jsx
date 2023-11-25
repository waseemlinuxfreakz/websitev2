import React from 'react';
import Logo from '../../assets/img/Emmet-logo.svg';
import './Sidebar.css';


function LogoTop() {
    return ( 
        <div className="sidebarTopLogo">
            <a href="/" className='NavBrand'><img src={Logo} alt="Logo" className='' /></a>
            <div className="toggleLink">
                <a href="#" className='testnet active'>Testnet</a>
                <a href="#" className='mainnet'>Mainnet</a>
            </div>
        </div>
     );
}

export default LogoTop;