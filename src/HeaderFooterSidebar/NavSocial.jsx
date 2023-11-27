import React from 'react';
import Xtwiter from '../assets/img/social/x.svg';
import Github from '../assets/img/social/github.svg';
import Discord from '../assets/img/social/Discord.svg';
import Telegram from '../assets/img/social/Telegram.svg';
import './NavSocial.css';


function NavSocial() {
    return ( 
        <div className="social_box">
            <ul className="socialList">
                <li><a href="https://twitter.com/Emmet_Finance" target="_blank"><img src={Xtwiter} alt="" /></a></li>
                <li><a href="https://github.com/Emmet-Finance/" target="_blank"><img src={Github} alt="" /></a></li>
                <li><a href="https://discord.com/invite/yuXxDctC4W" target="_blank"><img src={Discord} alt="" /></a></li>
                <li><a href="https://t.me/Emmet_Finance" target="_blank"><img src={Telegram} alt="" /></a></li>
            </ul>
        </div>
     );
}

export default NavSocial;