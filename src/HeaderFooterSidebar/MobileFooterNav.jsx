import React from 'react';
import NavIcon1 from '../assets/img/nav-icon/nav-Icons-1.svg';
import NavIcon2 from '../assets/img/nav-icon/nav-Icons-2.svg';
import NavIcon3 from '../assets/img/nav-icon/nav-Icons-3.svg';

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
            </ul>
        </div>
     );
}

export default MobileFooterNav;