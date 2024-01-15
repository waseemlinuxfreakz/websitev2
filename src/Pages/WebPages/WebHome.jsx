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


import TopArt1 from '../../assets/img/web/fire-bg.png';
import TopArt2 from '../../assets/img/web/line-bg.png';


function WebHome() {
    return ( 
        <>
            <div className="webWraper">
                <WebHeader/>
                    <div className="pageWraper">
                        <div className="topArea">
                            <img src={TopArt1} alt="" className="topArt1" />
                            <img src={TopArt2} alt="" className="topArt2" />
                            <TopSlider/>
                            <IndexHero/>
                            <NetworkSlider/>
                        </div>
                        <OneStop/>
                        <AccessDefi/>
                        <Security/>
                    </div>
                <WebFooter/>
            </div>
        </>
     );
}

export default WebHome;