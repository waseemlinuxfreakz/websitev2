import React from 'react';
import NavIcon1 from '../assets/img/nav-icon/nav-Icons-1.svg';
import NavIcon2 from '../assets/img/nav-icon/nav-Icons-2.svg';
import NavIcon3 from '../assets/img/nav-icon/nav-Icons-3.svg';
import NavIcon4 from '../assets/img/nav-icon/nav-Icons-4.svg';
import NavIcon5 from '../assets/img/nav-icon/nav-Icons-5.svg';
import NavIcon6 from '../assets/img/nav-icon/nav-Icons-6.svg';
import NavIcon7 from '../assets/img/nav-icon/nav-Icons-7.svg';

function MobileFooterNav() {
    return ( 
        <div className="mobileFooterNav">
            <ul className="navlinks">
                <li>
                    <a href="#" className='navLink active'>
                        <img src={NavIcon1} alt="NavIcon" />
                        <span>Swap</span>
                    </a>
                </li>
                <li>
                    <a href="#" className='navLink'>
                        <img src={NavIcon2} alt="NavIcon" />
                        <span>Bridge</span>
                    </a>
                </li>
                <li>
                    <a href="#" className='navLink'>
                        <img src={NavIcon3} alt="NavIcon" />
                        <span>Explorer</span>
                    </a>
                </li>
                <li>
                    <a href="#" className='navLink'>
                        <img src={NavIcon4} alt="NavIcon" />
                        <span>Farm</span>
                        <span className="soon">Soon</span>
                    </a>
                </li>
                <li>
                    <a href="#" className='navLink'>
                        <img src={NavIcon5} alt="NavIcon" />
                        <span>Loans</span>
                        <span className="soon">Soon</span>
                    </a>
                </li>
                <li>
                    <a href="#" className='navLink'>
                        <img src={NavIcon6} alt="NavIcon" />
                        <span>Stake</span>
                        <span className="soon">Soon</span>
                    </a>
                </li>
                <li>
                    <a href="#" className='navLink'>
                        <img src={NavIcon7} alt="NavIcon" />
                        <span>Governance</span>
                        <span className="soon">Soon</span>
                    </a>
                </li>
            </ul>
        </div>
     );
}

export default MobileFooterNav;