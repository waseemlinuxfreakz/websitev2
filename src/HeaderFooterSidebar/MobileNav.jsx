import React from 'react';
import NavSocial from './NavSocial';
import SidebarNav from './SidebarComponent/SidebarNav';
import SidebarBottomNav from './SidebarComponent/SidebarBottomNav';

function MobileNav() {
    return ( 
        <div className="mobileNavContainer">
            <SidebarNav/>
            <SidebarBottomNav/>
            <NavSocial/>
        </div>
     );
}

export default MobileNav;