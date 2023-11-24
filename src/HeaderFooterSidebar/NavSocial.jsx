import React from 'react';
import Xtwiter from '../assets/img/social/x.svg';
import Github from '../assets/img/social/github.svg';
import Discord from '../assets/img/social/Discord.svg';
import Telegram from '../assets/img/social/Telegram.svg';


function NavSocial() {
    return ( 
        <div className="social_box">
            <ul className="socialList">
                <li><a href="#"><img src={Xtwiter} alt="" /></a></li>
                <li><a href="#"><img src={Github} alt="" /></a></li>
                <li><a href="#"><img src={Discord} alt="" /></a></li>
                <li><a href="#"><img src={Telegram} alt="" /></a></li>
            </ul>
        </div>
     );
}

export default NavSocial;