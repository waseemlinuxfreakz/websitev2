import React, { useState, useEffect } from 'react';
import {isMobile} from 'react-device-detect';
import Header from '../HeaderFooterSidebar/Header';
import Footer from '../HeaderFooterSidebar/Footer';
import Sidebar from '../HeaderFooterSidebar/Sidebar';
import BridgeSwapContainer from './BridgeComponents/BridgeSwapContainer';
import MobileHeader from '../HeaderFooterSidebar/MobileHeader';
import MainActionButton from './BridgeComponents/MainActionButton';
import SidebarSlider from '../HeaderFooterSidebar/SidebarComponent/SidebarSlider';
import SwapSuccess from './HomeComponents/SwapSuccess';
import SwapFailed from './HomeComponents/SwapFailed';
import SwapConfirm from './HomeComponents/SwapConfirm';

const Bridge = () => {
  
    return (
      <>
        {isMobile ? (
            <div className="MobilePageContainer">
                <div className="mobileArea" id='mobileContainer'>
                    <MobileHeader/>
                    <BridgeSwapContainer/>
                    <SidebarSlider/>
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
                          caption="Bridge"
                        />
                        <div className="pageContent">
                            <div className="swapContainerArea">
                                <BridgeSwapContainer/>
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
  
  export default Bridge;
