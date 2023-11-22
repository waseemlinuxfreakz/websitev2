import React, { useState, useEffect } from 'react';
import Header from '../HeaderFooterSidebar/Header';
import Footer from '../HeaderFooterSidebar/Footer';
import Sidebar from '../HeaderFooterSidebar/Sidebar';
import SwapContainer from './HomeComponents/SwapContainer';
import MobileHeader from '../HeaderFooterSidebar/MobileHeader';
import ConnectToWallet from './HomeComponents/ConnectToWallet';
import SidebarSlider from '../HeaderFooterSidebar/SidebarComponent/SidebarSlider';


const HomePage = () => {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      // Check the window width and update state
      const updateWindowDimensions = () => {
        setIsMobile(window.innerWidth <= 768); // You can adjust the breakpoint as needed
      };
  
      // Add event listener for window resize
      window.addEventListener('resize', updateWindowDimensions);
  
      // Initial call to set the initial window width
      updateWindowDimensions();
  
      // Remove event listener on component unmount
      return () => {
        window.removeEventListener('resize', updateWindowDimensions);
      };
    }, []);
  
    return (
      <>
        {isMobile ? (
            <div className="MobilePageContainer">
                <div className="mobileArea" id='mobileContainer'>
                    <MobileHeader/>
                    <SwapContainer/>
                    <SidebarSlider/>
                    <Footer/>
                    <ConnectToWallet/>
                </div>
            </div>
        ) : (
            <div className="pageContainer">
                <div className="pageContentRow" id='desktopContainer'>
                    <div className="sidebarArea">
                        <Sidebar/>
                    </div>
                    <div className="mainWrap">
                        <Header/>
                        <div className="pageContent">
                            <div className="swapContainerArea">
                                <SwapContainer/>
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
  
  export default HomePage;
