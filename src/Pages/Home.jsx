import React, { useState, useEffect } from 'react';
import {isMobile} from 'react-device-detect';
import Header from '../HeaderFooterSidebar/Header';
import Footer from '../HeaderFooterSidebar/Footer';
import Sidebar from '../HeaderFooterSidebar/Sidebar';
import SwapContainer from './HomeComponents/SwapContainer';
import MobileHeader from '../HeaderFooterSidebar/MobileHeader';
import MainActionButton from './HomeComponents/MainActionButton';
// import SidebarSlider from '../HeaderFooterSidebar/SidebarComponent/SidebarSlider';
import SwapSuccess from './HomeComponents/SwapSuccess';
import SwapFailed from './HomeComponents/SwapFailed';
import SwapConfirm from './HomeComponents/SwapConfirm';
import useMobileDetector from '../hooks/useMobileDetector';

const HomePage = () => {

    const isMobile = useMobileDetector();
    
    return (
      <>
        {isMobile ? (
            <div className="MobilePageContainer">
                <div className="mobileArea" id='mobileContainer'>
                    <MobileHeader/>
                    <SwapContainer/>
                    {/* <SidebarSlider/> */}
                    <Footer/>
                    <MainActionButton/>
                    {/* <SwapSuccess/> */}
                    {/* <SwapFailed/> */}
                    {/* <SwapConfirm/> */}
                </div>
            </div>
        ) : (
            <div className="pageContainer">
                <div className="pageContentRow" id='desktopContainer'>
                    <div className="sidebarArea">
                        <Sidebar/>
                    </div>
                    <div className="mainWrap">
                        <Header
                          caption="Swap"
                        />
                        <div className="pageContent">
                            <div className="swapContainerArea">
                                <SwapContainer/>
                            </div>
                            {/* <SwapSuccess/> */}
                            {/* <SwapFailed/> */}
                            {/* <SwapConfirm/> */}
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        )}
      </>
    );
  };
  
  export default HomePage;
