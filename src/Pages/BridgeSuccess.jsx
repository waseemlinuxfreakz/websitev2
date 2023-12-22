import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import Header from '../HeaderFooterSidebar/Header';
import Footer from '../HeaderFooterSidebar/Footer';
import Sidebar from '../HeaderFooterSidebar/Sidebar';
import BridgeSwapTransaction from './BridgeComponents/BridgeSwaptransaction';
import MobileHeader from '../HeaderFooterSidebar/MobileHeader';
import MainActionButton from './BridgeComponents/MainActionButton';
import SidebarSlider from '../HeaderFooterSidebar/SidebarComponent/SidebarSlider';
import useBridgeSuccess from '../hooks/useBridgeSuccess';
import useBridgeFailure from '../hooks/useBridgeFailure';



const BridgeSuccess = () => {

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
    
    const isSuccess = useBridgeSuccess();
    const isFailure = useBridgeFailure();

    return (
        <>
            {isMobile ? (
                <div className="MobilePageContainer">
                    <div className="mobileArea" id='mobileContainer'>
                        <MobileHeader />
                        <BridgeSwapTransaction />
                        <SidebarSlider />
                        <Footer />
                        <MainActionButton />
                    </div>
                </div>
            ) : (
                <div className="pageContainer">
                    <div className="pageContentRow" id='desktopContainer'>
                        <div className="sidebarArea">
                            <Sidebar />
                        </div>
                        <div className="mainWrap">
                            <Header
                                caption="Bridge"
                            />
                            <div className="pageContent">
                                <div className="swapContainerArea">
                                    <BridgeSwapTransaction />
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

export default BridgeSuccess;
