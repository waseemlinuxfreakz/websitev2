import React from 'react';

import './Social.css';

import Discord from '../../../assets/img/web/social/discord.svg';
import Telegram from '../../../assets/img/web/social/telegram.svg';
import X from '../../../assets/img/web/social/x.svg';
import Linkedin from '../../../assets/img/web/social/link.svg';

function Social() {
    return ( 
        <div className="social">
            <a href="https://twitter.com/Emmet_Finance" target='_blank'><img src={X} alt="X" /></a>
            <a href="https://t.me/Emmet_Finance" target='_blank'><img src={Telegram} alt="Telegram" /></a>
            <a href="https://discord.gg/yuXxDctC4W" target='_blank'><img src={Discord} alt="Discord" /></a>
            <a href="https://www.linkedin.com/company/emmet-finance/" target='_blank'><img src={Linkedin} alt="Linkedin" /></a>
        </div>
     );
}

export default Social;