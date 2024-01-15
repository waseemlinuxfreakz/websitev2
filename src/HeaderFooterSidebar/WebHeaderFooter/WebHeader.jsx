import React from 'react';

import Logo1 from '../../assets/img/web/logo.svg';
import Logo2 from '../../assets/img/web/logo-2.svg';
import LogoMob from '../../assets/img/web/logo-mob.svg';

import './WebHeader.css'
function WebHeader() {
    const isMobile = window.innerWidth <= 768;
    return (
        <header className='webHeader'>
            <div className="container">
                <div className="navArea">
                    <div className="navBrand">
                        {isMobile ? null : 
                            <a href="./">
                                <img src={Logo1} className='logo-1' alt="Logo" />
                                <img src={Logo2} className='logo-2' alt="Logo" />
                            </a>
                        }
                        <a href="./" className='mobLogo'><img src={LogoMob} alt="Emmet" className='' /></a>
                    </div>
                        <a href="/bridge" className='launchApp'>Launch dApp</a>
                </div>
            </div>
        </header>
    );
}

export default WebHeader;