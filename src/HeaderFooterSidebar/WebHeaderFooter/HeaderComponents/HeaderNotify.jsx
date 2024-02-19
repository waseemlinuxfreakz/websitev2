import React, { useState } from 'react';
import ReactGA from 'react-ga';
// import Rocket from '../../../assets/img/web/rocket.svg';
import CloseButton from '../../../assets/img/web/CloseButton.svg';
import './HeaderNotify.css'

function HeaderNotify() {

    const [isVisible, setIsVisible] = useState(true);

    // Function to handle the close button click
    const handleCloseClick = () => {
        // Hide the notification by updating the state
        setIsVisible(false);
        ReactGA.event({
            category: 'User',
            action: 'Clicked Button',
            label: 'Join the Adventure'
        });

    };

    return isVisible ? (
        <div className="headerNotify">
            <div className="headerNotifyContent">
                <p>EMMET Bridge V2 Testnet is LIVE! <a href="https://taskon.xyz/campaign/detail/35634" target='_blank'>Join the Adventure</a>
                </p>
            </div>
            <div className="closeNotify" onClick={handleCloseClick}>
                <img src={CloseButton} alt="CloseButton" />
            </div>
        </div>
    ) : null;
}

export default HeaderNotify;