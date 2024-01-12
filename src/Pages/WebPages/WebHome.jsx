import React from 'react';
import './WebHome.css';
import WebHeader from '../../HeaderFooterSidebar/WebHeaderFooter/WebHeader';
import WebFooter from '../../HeaderFooterSidebar/WebHeaderFooter/WebFooter';
import TopSlider from './IndexpageComponents/TopSlider';
import IndexHero from './IndexpageComponents/IndexHero';
import NetworkSlider from './IndexpageComponents/NetworkSlider';
import OneStop from './IndexpageComponents/OneStop';
import AccessDefi from './IndexpageComponents/AccessDefi';
import Security from './IndexpageComponents/Security';


function WebHome() {
    return ( 
        <>
            <div className="webWraper">
                <WebHeader/>
                    <div className="pageWraper">
                        <TopSlider/>
                        <IndexHero/>
                        <NetworkSlider/>
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