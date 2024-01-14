import React from 'react';
import Header from '../HeaderFooterSidebar/Header';
import Footer from '../HeaderFooterSidebar/Footer';
import Sidebar from '../HeaderFooterSidebar/Sidebar';
import BridgeSwapTransaction from './BridgeComponents/BridgeSwaptransaction';
import MobileHeader from '../HeaderFooterSidebar/MobileHeader';
// import SidebarSlider from '../HeaderFooterSidebar/SidebarComponent/SidebarSlider';
import useMobileDetector from '../hooks/useMobileDetector';

const BridgeSuccess = () => {

    const isMobile = useMobileDetector();

    return (
        <>
            {isMobile ? (
                <div className="MobilePageContainer">
                    <div className="mobileArea" id='mobileContainer'>
                        <MobileHeader />
                        <BridgeSwapTransaction />
                        {/* <SidebarSlider /> */}
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
