import React from 'react';

import './WebFooter.css'
import Subscrib from './FooterComponenets/Subscrib';
import FooterRight from './FooterComponenets/FooterRight';
import Social from './FooterComponenets/Social';
import Copyright from './FooterComponenets/Copyright';

import Logo1 from '../../assets/img/web/logo.svg';


function WebFooter() {
    return ( 
        <footer className="webFooterArea">
            <div className="container">
                <div className="row footer_Row">
                    <div className="footerLeft">
                        <span className="socialMob">
                            <a href="#" className='footeLogo'><img src={Logo1} className='logo-1' alt="Emmet Logo" /></a>
                            <Social/>
                        </span>
                        <Subscrib/>
                        <span className="socialDesk"><Social/></span>
                        <span className='CopyrightDesk'><Copyright/></span>
                    </div>
                    <div className="footerRightBox">
                        <FooterRight/>
                        <span className='CopyrightMob'><Copyright/></span>
                    </div>
                </div>
            </div>
        </footer>
     );
}

export default WebFooter;