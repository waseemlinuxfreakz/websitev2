import React from 'react';

import './Social.css';

import Discord from '../../../assets/img/web/social/discord.svg';
import Telegram from '../../../assets/img/web/social/telegram.svg';
import X from '../../../assets/img/web/social/x.svg';

function Social() {
    return ( 
        <div className="social">
            <a href="#"><img src={Discord} alt="Discord" /></a>
            <a href="#"><img src={Telegram} alt="Telegram" /></a>
            <a href="#"><img src={X} alt="X" /></a>
        </div>
     );
}

export default Social;