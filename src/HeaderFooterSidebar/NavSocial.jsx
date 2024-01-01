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
                <li>
                    <a
                        aria-label="Go to the corporate X (former Twitter) channel"
                        href="https://twitter.com/Emmet_Finance"
                        target="_blank"
                    >
                        <img
                            src={Xtwiter}
                            alt="X (former Twitter) Logo"
                        />
                    </a>
                </li>
                <li>
                    <a
                        aria-label="Go to the corporate GitHub repository"
                        href="https://github.com/Emmet-Finance/"
                        target="_blank"
                    >
                        <img
                            src={Github}
                            alt="GitHub Logo"
                        />
                    </a>
                </li>
                <li>
                    <a
                        aria-label="Go to the corporate Discord channel"
                        href="https://discord.com/invite/yuXxDctC4W"
                        target="_blank"
                    >
                        <img
                            src={Discord}
                            alt="Discord Logo"
                        />
                    </a>
                </li>
                <li>
                    <a
                        aria-label="Go to the corporate Telegram channel"
                        href="https://t.me/Emmet_Finance"
                        target="_blank"
                    >
                        <img
                            src={Telegram}
                            alt="Telegram Logo"
                        />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default NavSocial;