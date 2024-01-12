import React from 'react';

import './WebFooter.css'
import Subscrib from './FooterComponenets/Subscrib';
import FooterRight from './FooterComponenets/FooterRight';
import Social from './FooterComponenets/Social';
import Copyright from './FooterComponenets/Copyright';



function WebFooter() {
    return ( 
        <footer className="webFooterArea">
            <div className="container">
                <div className="row footerRow">
                    <div className="footerLeft">
                        <Subscrib/>
                        <Social/>
                        <Copyright/>
                    </div>
                    <div className="footerRightBox">
                        <FooterRight/>
                    </div>
                </div>
            </div>
        </footer>
     );
}

export default WebFooter;