import React, { useState, useEffect } from "react";
import Header from "../HeaderFooterSidebar/LockAndMintHeader";
import Footer from "../HeaderFooterSidebar/Footer";
import Sidebar from "../HeaderFooterSidebar/Sidebar";
import BridgeSwapContainer from "./LockAndMintComponents/BridgeSwapContainer";
import BridgeTransferProgress from "./BridgeComponents/BridgeTransferProgress";
import MobileHeader from "../HeaderFooterSidebar/LockAndMintMobileHeader";
import MainActionButton from "../Pages/LockAndMintComponents/MainActionButton";
// import SidebarSlider from '../HeaderFooterSidebar/SidebarComponent/SidebarSlider';
import { useAppSelector } from "../hooks/storage";
import useMobileDetector from "../hooks/useMobileDetector";

const LockAndMint = () => {
  const bridge = useAppSelector((state) => state.bridge);

  const isMobile = useMobileDetector();

  const [showProgress, setShowProgress] = useState(
    bridge.isTransferProgressVisible,
  );

  // Show bridge transaction progress
  useEffect(() => {
    setShowProgress(bridge.isTransferProgressVisible);
  }, [bridge.isTransferProgressVisible]);

  return (
    <>
      {isMobile ? (
        <div className="MobilePageContainer">
          <div className="mobileArea" id="mobileContainer">
            <MobileHeader />
            {showProgress ? (
              <BridgeTransferProgress />
            ) : (
              <BridgeSwapContainer />
            )}
            {/* <SidebarSlider /> */}
            <Footer />
            {!bridge.isTransferProgressVisible && <MainActionButton />}

            {/* <SwapConfirm/> */}
          </div>
        </div>
      ) : (
        <div className="pageContainer">
          <div className="pageContentRow" id="desktopContainer">
            <div className="sidebarArea">
              <Sidebar />
            </div>
            <div className="mainWrap">
              <Header caption="Bridge" />
              <div className="pageContent">
                {/* <h1 className='maintainance'>
                                    UNDER MAINTENANCE
                                </h1> */}

                <div className="swapContainerArea">
                  {showProgress ? (
                    <BridgeTransferProgress />
                  ) : (
                    <BridgeSwapContainer />
                  )}
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

export default LockAndMint;
