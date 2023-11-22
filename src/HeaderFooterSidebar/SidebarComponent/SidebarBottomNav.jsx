import React from 'react';
import NavIcon1 from '../../assets/img/nav-icon/second-nav-Icons-1.svg';
import NavIcon2 from '../../assets/img/nav-icon/second-nav-Icons-2.svg';
import NavIcon3 from '../../assets/img/nav-icon/second-nav-Icons-3.svg';
import NavIcon4 from '../../assets/img/nav-icon/second-nav-Icons-4.svg';


function SidebarBottomNav() {
    return ( 
        <div className="SidebarBottomNav sidebarNav">
            <ul className="navlinks">
                <li>
                    <a href="#" className='navLink'>
                        <img src={NavIcon1} alt="NavIcon" />
                        <span>News</span>
                    </a>
                </li>
                <li>
                    <a href="#" className='navLink'>
                        <img src={NavIcon2} alt="NavIcon" />
                        <span>Docs</span>
                    </a>
                </li>
                <li>
                    <a href="#" className='navLink'>
                        <img src={NavIcon3} alt="NavIcon" />
                        <span>SDK</span>
                    </a>
                </li>
                <li>
                    <a href="#" className='navLink'>
                        <img src={NavIcon4} alt="NavIcon" />
                        <span>Widget</span>
                    </a>
                </li>
            </ul>
        </div>
     );
}

export default SidebarBottomNav;