import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import Header from '../HeaderFooterSidebar/Header';
import Footer from '../HeaderFooterSidebar/Footer';
import Sidebar from '../HeaderFooterSidebar/Sidebar';
import BridgeSwapContainer from './BridgeComponents/BridgeSwapContainer';
import MobileHeader from '../HeaderFooterSidebar/MobileHeader';
import SidebarSlider from '../HeaderFooterSidebar/SidebarComponent/SidebarSlider';

import ExplorerHeader from '../HeaderFooterSidebar/ExplorerHeader';
import TransactionDetails from './ExplorerComponents/TransactionDetails/TransactionDetails';

import useMobileDetector from '../hooks/useMobileDetector';


const TransactionDetailsPage = () => {

    const isMobile = useMobileDetector();

    return (
        <>
            {isMobile ? (
                <div className="MobilePageContainer">
                    <div className="mobileArea" id='mobileContainer'>
                        <MobileHeader />
                        <TransactionDetails />
                        <SidebarSlider />
                        <Footer />
                    </div>
                </div>
            ) : (
                <div className="pageContainer">
                    <div className="pageContentRow" id='desktopContainer'>
                        <div className="sidebarArea">
                            <Sidebar />
                        </div>
                        <div className="mainWrap">
                            <ExplorerHeader />
                            <div className="pageContent">
                                <div className="swapContainerArea">
                                    <TransactionDetails />
                                </div>
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TransactionDetailsPage;
