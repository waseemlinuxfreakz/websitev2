import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import Header from '../HeaderFooterSidebar/Header';
import Footer from '../HeaderFooterSidebar/Footer';
import Sidebar from '../HeaderFooterSidebar/Sidebar';
import BridgeSwapContainer from './BridgeComponents/BridgeSwapContainer';
import BridgeSwapTransaction from './BridgeComponents/BridgeSwaptransaction';
import MobileHeader from '../HeaderFooterSidebar/MobileHeader';
import MainActionButton from './BridgeComponents/MainActionButton';
import SidebarSlider from '../HeaderFooterSidebar/SidebarComponent/SidebarSlider';
import SwapSuccess from './HomeComponents/SwapSuccess';
import SwapFailed from './HomeComponents/SwapFailed';
import SwapConfirm from './HomeComponents/SwapConfirm';
import useBridgeFailure from '../hooks/useBridgeFailure';
import TransactionProgress from './BridgeComponents/TransactionProgress';
import { useAppSelector } from '../hooks/storage';

const Bridge = () => {

    const bridge = useAppSelector((state) => state.bridge);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
    const [showProgress, setShowProgress] = useState(bridge.isTransferProgressVisible);

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

    // Show bridge transaction progress
    useEffect(() => { setShowProgress(bridge.isTransferProgressVisible) }, [bridge.isTransferProgressVisible])

    const isFailure = useBridgeFailure();

    return (
        <>
            {isMobile ? (
                <div className="MobilePageContainer">
                    <div className="mobileArea" id='mobileContainer'>
                        <MobileHeader />
                        {showProgress
                            ? < BridgeSwapTransaction />
                            : <BridgeSwapContainer />
                        }
                        <SidebarSlider />
                        <Footer />
                        {/* <MainActionButton /> */}
                        {/* <SwapConfirm/> */}
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
                                    {showProgress
                                        ? < BridgeSwapTransaction />
                                        : <BridgeSwapContainer />
                                    }
                                </div>
                                {/* <SwapConfirm/> */}

                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Bridge;
