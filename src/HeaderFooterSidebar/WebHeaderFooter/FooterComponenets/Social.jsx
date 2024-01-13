import React from 'react';

import './Social.css';

import Discord from '../../../assets/img/web/social/discord.svg';
import Telegram from '../../../assets/img/web/social/telegram.svg';
import X from '../../../assets/img/web/social/x.svg';

function Social() {
    return ( 
        <div className="social">
            <a href="https://discord.gg/yuXxDctC4W"><img src={Discord} alt="Discord" /></a>
            <a href="https://t.me/Emmet_Finance"><img src={Telegram} alt="Telegram" /></a>
            <a href="https://twitter.com/Emmet_Finance"><img src={X} alt="X" /></a>
        </div>
     );
}

export default Social;