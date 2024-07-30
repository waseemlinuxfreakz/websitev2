import React, { useState, useEffect } from "react";
import Header from "../HeaderFooterSidebar/Header";
import Footer from "../HeaderFooterSidebar/Footer";
import Sidebar from "../HeaderFooterSidebar/Sidebar";
import MobileHeader from "../HeaderFooterSidebar/MobileHeader";
// import SidebarSlider from '../HeaderFooterSidebar/SidebarComponent/SidebarSlider';
import Yourliquidity from "./PoolComponents/PoolTable/Yourliquidity";
import useMobileDetector from "../hooks/useMobileDetector";
import { Link } from "react-router-dom";

const YourLiquidityPage = () => {
  const isMobile = useMobileDetector();

  return (
    <>
      {isMobile ? (
        <div className="MobilePageContainer poolPageWrap">
          <div className="mobileArea" id="mobileContainer">
            <MobileHeader />
            <Yourliquidity />

            {/* <SidebarSlider/> */}
            <Footer />
          </div>
        </div>
      ) : (
        <div className="pageContainer deskPoolPageWrap addLiquidityPage">
          <div className="pageContentRow" id="desktopContainer">
            <div className="sidebarArea">
              <Sidebar />
            </div>
            <div className="mainWrap">
              <Header caption="Liquidity pool" />
              <div className="pageContent">
                <div className="swapContainerArea">
                  <ul className="breadcum">
                    <li>
                      <Link to="/pool">All pools</Link>
                    </li>
                    <li>Add liquidity</li>
                  </ul>
                  <Yourliquidity />
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

export default YourLiquidityPage;
