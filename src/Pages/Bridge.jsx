import React, { useState, useEffect } from 'react';
import Header from '../HeaderFooterSidebar/Header';
import Footer from '../HeaderFooterSidebar/Footer';
import Sidebar from '../HeaderFooterSidebar/Sidebar';
import BridgeSwapContainer from './BridgeComponents/BridgeSwapContainer';
import BridgeSwapTransaction from './BridgeComponents/BridgeSwaptransaction';
import MobileHeader from '../HeaderFooterSidebar/MobileHeader';
import MainActionButton from './BridgeComponents/MainActionButton';
// import SidebarSlider from '../HeaderFooterSidebar/SidebarComponent/SidebarSlider';
import { useAppSelector } from '../hooks/storage';
import useMobileDetector from '../hooks/useMobileDetector';

const Bridge = () => {

    const bridge = useAppSelector((state) => state.bridge);

    const isMobile = useMobileDetector();

    const [showProgress, setShowProgress] = useState(bridge.isTransferProgressVisible);

    // Show bridge transaction progress
    useEffect(() => { setShowProgress(bridge.isTransferProgressVisible) }, [bridge.isTransferProgressVisible])

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
                        {/* <SidebarSlider /> */}
                        <Footer />
                        {!bridge.isTransferProgressVisible && <MainActionButton />}

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
