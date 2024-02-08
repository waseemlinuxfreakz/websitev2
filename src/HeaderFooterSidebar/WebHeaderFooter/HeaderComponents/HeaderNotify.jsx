import React, { useState } from 'react';

// import Rocket from '../../../assets/img/web/rocket.svg';
import CloseButton from '../../../assets/img/web/CloseButton.svg';

import './HeaderNotify.css'

function HeaderNotify() {

    const [isVisible, setIsVisible] = useState(true);

    // Function to handle the close button click
    const handleCloseClick = () => {
        // Hide the notification by updating the state
        setIsVisible(false);
    };

    return isVisible ? (
        <div className="headerNotify">
            <div className="headerNotifyContent">
                <p><b>🚀 $EMMET Token Sale:</b> February 15th at 18:00 UTC. <a href="https://form.jotform.com/231456892158061" target='_blank'>Join the Whitelist</a></p>
            </div>
            <div className="closeNotify" onClick={handleCloseClick}>
                <img src={CloseButton} alt="CloseButton" />
            </div>
        </div>
    ) : null;
}

export default HeaderNotify;