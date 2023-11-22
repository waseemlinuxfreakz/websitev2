import React from 'react';
import Logo from '../../assets/img/Emmet-logo.svg';


function LogoTop() {
    return ( 
        <div className="sidebarTopLogo">
            <img src={Logo} alt="Logo" className='deskTopLogo' />
            <div className="toggleLink">
                <a href="#" className='testnet active'>Testnet</a>
                <a href="#" className='mainnet'>Mainnet</a>
            </div>
        </div>
     );
}

export default LogoTop;