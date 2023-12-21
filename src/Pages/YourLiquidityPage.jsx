import React, { useState, useEffect } from 'react';
import {isMobile} from 'react-device-detect';
import Header from '../HeaderFooterSidebar/Header';
import Footer from '../HeaderFooterSidebar/Footer';
import Sidebar from '../HeaderFooterSidebar/Sidebar';
import MobileHeader from '../HeaderFooterSidebar/MobileHeader';
import SidebarSlider from '../HeaderFooterSidebar/SidebarComponent/SidebarSlider';

import Yourliquidity from './PoolComponents/PoolTable/Yourliquidity';



const YourLiquidityPage = () => {
  
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 1024);
        };

        // Attach the event listener when the component mounts
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    
    return (
      <>
        {isMobile ? (
            <div className="MobilePageContainer poolPageWrap">
                <div className="mobileArea" id='mobileContainer'>
                    <MobileHeader/>
                    <Yourliquidity/>
                    <SidebarSlider/>
                    <Footer/>
                </div>
            </div>
        ) : (
            <div className="pageContainer deskPoolPageWrap addLiquidityPage">
                
                <div className="pageContentRow" id='desktopContainer'>
                    <div className="sidebarArea">
                        <Sidebar/>
                    </div>
                    <div className="mainWrap">
                            <Header
                                caption="Liquidity pool"
                            />
                        <div className="pageContent">
                            <div className="swapContainerArea">
                                <ul className="breadcum">
                                    <li><a href="/pool">All pools</a></li>
                                    <li>Add liquidity</li>
                                </ul>
                                <Yourliquidity/>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        )}
      </>
    );
  };
  
  export default YourLiquidityPage;
