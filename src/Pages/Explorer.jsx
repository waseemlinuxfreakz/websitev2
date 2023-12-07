import React, { useState, useEffect } from 'react';
import {isMobile} from 'react-device-detect';
import Header from '../HeaderFooterSidebar/Header';
import Footer from '../HeaderFooterSidebar/Footer';
import Sidebar from '../HeaderFooterSidebar/Sidebar';
import BridgeSwapContainer from './BridgeComponents/BridgeSwapContainer';
import MobileHeader from '../HeaderFooterSidebar/MobileHeader';
import MainActionButton from './BridgeComponents/MainActionButton';
import SidebarSlider from '../HeaderFooterSidebar/SidebarComponent/SidebarSlider';

import ExplorerHeader from '../HeaderFooterSidebar/ExplorerHeader';
import ExplorerPageContainer from './ExplorerComponents/ExplorerPageContainer';



const ExplorerPage = () => {
  
    return (
      <>
        {isMobile ? (
            <div className="MobilePageContainer">
                <div className="mobileArea" id='mobileContainer'>
                    <MobileHeader/>
                    <BridgeSwapContainer/>
                    <SidebarSlider/>
                    <Footer/>
                </div>
            </div>
        ) : (
            <div className="pageContainer">
                <div className="pageContentRow" id='desktopContainer'>
                    <div className="sidebarArea">
                        <Sidebar/>
                    </div>
                    <div className="mainWrap">
                            <ExplorerHeader/>
                        <div className="pageContent">
                            <div className="swapContainerArea">
                                <ExplorerPageContainer/>
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
  
  export default ExplorerPage;
