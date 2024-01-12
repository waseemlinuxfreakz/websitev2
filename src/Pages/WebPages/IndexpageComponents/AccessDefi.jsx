import React from 'react';

import './AccessDefi.css';

import Link from '../../../assets/img/web/Link.svg';
import DefiDesk from '../../../assets/img/web/defi.png';

function AccessDefi() {
    return ( 
        <div className="AccessDefiContainer">
            <div className="container">
                <div className="AccessDefi">
                    <img src={DefiDesk} alt="DefiDesk" className="defiBgDesk" />
                    <div className="AccessDefiInner">
                        <h2>EMMET is your access to DeFi freedom</h2>
                        <p>Participate in the future of decentralized finance by joining our EMMET token sale. Secure your stake in the evolution of cross-chain DeFi, unlocking exclusive benefits and contributing to the growth of the Emmet Finance ecosystem</p>
                        <a href="#" className='whiteBtn'>join the waitlist <img src={Link} alt="Link" /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default AccessDefi;