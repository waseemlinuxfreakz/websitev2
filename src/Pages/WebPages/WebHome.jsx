import React from 'react';
import WebHeader from '../../HeaderFooterSidebar/WebHeaderFooter/WebHeader';
import WebFooter from '../../HeaderFooterSidebar/WebHeaderFooter/WebFooter';
import TopSlider from './IndexpageComponents/TopSlider';
import IndexHero from './IndexpageComponents/IndexHero';
import NetworkSlider from './IndexpageComponents/NetworkSlider';
import OneStop from './IndexpageComponents/OneStop';
import AccessDefi from './IndexpageComponents/AccessDefi';
import Security from './IndexpageComponents/Security';

import './WebHome.css';

// import TopArt1 from '../../assets/img/web/fire-bg.png';
import TopArt1 from '../../assets/img/web/bg-hero-new.webp';
import TopArtMob from '../../assets/img/web/fire-bg2.png';
import TopArt2 from '../../assets/img/web/line-bg.png';

function WebHome() {
    // Determine whether it's a mobile device based on the screen width
    const isMobile = window.innerWidth <= 768;

    return (
        <>
            <div className="webWraper">
                <WebHeader />
                <div className="pageWraper">
                    <div className="topArea">
                        {isMobile ? null : <img src={TopArt1} alt="Hero Background Art" className="topArt1" />}
                        <img src={TopArtMob} alt="Hero Background Art" className="topArt1 topArtMob" />
                        <img src={TopArt2} alt="Hero Background Art" className="topArt2" />
                        <TopSlider />
                        <IndexHero />
                        <NetworkSlider />
                    </div>
                    <OneStop />
                    <AccessDefi />
                    <Security />
                </div>
                <WebFooter />
            </div>
        </>
    );
}

export default WebHome;
