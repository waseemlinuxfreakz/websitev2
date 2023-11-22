import React from 'react';
import LogoTop from './SidebarComponent/LogoTop';
import SidebarNav from './SidebarComponent/SidebarNav';
import SidebarSlider from './SidebarComponent/SidebarSlider';
import SidebarBottomNav from './SidebarComponent/SidebarBottomNav';


function Sidebar() {
    return ( 
        <div className="sidebare_navArea">
            <LogoTop/>
            <SidebarNav/>
            <SidebarSlider/>
            <SidebarBottomNav/>
        </div>
     );
}

export default Sidebar;