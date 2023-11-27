import React from 'react';
import LogoTop from './SidebarComponent/LogoTop';
import SidebarNav from './SidebarComponent/SidebarNav';
import SidebarSlider from './SidebarComponent/SidebarSlider';
import SidebarBottomNav from './SidebarComponent/SidebarBottomNav';
import NavSocial from './NavSocial';


function Sidebar() {
    return ( 
        <div className="sidebare_navArea">
            <LogoTop/>
            <SidebarNav/>
            <SidebarBottomNav/>
            <SidebarSlider/>
            <NavSocial/>
        </div>
     );
}

export default Sidebar;