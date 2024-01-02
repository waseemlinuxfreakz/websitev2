import React from 'react';
import Header from '../HeaderFooterSidebar/Header';
import Footer from '../HeaderFooterSidebar/Footer';
import Sidebar from '../HeaderFooterSidebar/Sidebar';
import MobileHeader from '../HeaderFooterSidebar/MobileHeader';
import SidebarSlider from '../HeaderFooterSidebar/SidebarComponent/SidebarSlider';
import ExplorerPageContainer from './ExplorerComponents/ExplorerPageContainer';
import useMobileDetector from '../hooks/useMobileDetector';

const ExplorerPage = () => {

    const isMobile = useMobileDetector();

    return (
        <>
            {isMobile
                ? (
                    <div className="MobilePageContainer">
                        <div className="mobileArea" id='mobileContainer'>
                            <MobileHeader />
                            <ExplorerPageContainer />
                            <SidebarSlider />
                            <Footer />
                        </div>
                    </div>
                )
                : (
                    <div className="pageContainer">
                        <div className="pageContentRow" id='desktopContainer'>
                            <div className="sidebarArea">
                                <Sidebar />
                            </div>
                            <div className="mainWrap">
                                <Header
                                    caption="Explorer"
                                />
                                <div className="pageContent">
                                    <div className="swapContainerArea">
                                        <ExplorerPageContainer />
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

export default ExplorerPage;
