import React, { useState, useEffect } from 'react';
import {isMobile} from 'react-device-detect';
import Header from '../HeaderFooterSidebar/Header';
import Footer from '../HeaderFooterSidebar/Footer';
import Sidebar from '../HeaderFooterSidebar/Sidebar';
import BridgeSwapContainer from './BridgeComponents/BridgeSwapContainer';
import MobileHeader from '../HeaderFooterSidebar/MobileHeader';
import SidebarSlider from '../HeaderFooterSidebar/SidebarComponent/SidebarSlider';

import ExplorerHeader from '../HeaderFooterSidebar/ExplorerHeader';
import TransactionDetails from './ExplorerComponents/TransactionDetails/TransactionDetails';



const TransactionDetailsPage = () => {
  
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
            <div className="MobilePageContainer">
                <div className="mobileArea" id='mobileContainer'>
                    <MobileHeader/>
                    <TransactionDetails/>
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
                            <TransactionDetails/>
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
  
  export default TransactionDetailsPage;
