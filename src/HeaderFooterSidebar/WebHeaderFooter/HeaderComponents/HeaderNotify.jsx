import React from 'react';

// import Rocket from '../../../assets/img/web/rocket.svg';
import CloseButton from '../../../assets/img/web/CloseButton.svg';

import './HeaderNotify.css'

function HeaderNotify() {
    return ( 
        <div className="headerNotify">
            <div className="headerNotifyContent">
                {/* <img src={Rocket} alt="Rocket" /> */}
                <p>🚀 $EMMET Token Sale: February 15th at 18:00 UTC</p>
            </div>
            <div className="closeNotify">
                <img src={CloseButton} alt="CloseButton" />
            </div>
        </div>
     );
}

export default HeaderNotify;