import React from 'react';
import InfoIcon from '../../assets/img/InfoIcons.svg';
import ArrowDonw from '../../assets/img/dow-Icons-s.svg';


function Slippage() {
    return ( 
        <div className="slippageContainer">
            <div className="slipageTitle">
                <div className="slippageLeft">
                    Slippage
                </div>
                <div className="slippageRight">
                    <div className="slipageSelect">
                        <select name="" id="">
                            <option value="0.5%">0.5%</option>
                            <option value="1%">1%</option>
                            <option value="1.5%">1.5%</option>
                            <option value="2%">2%</option>
                        </select>
                        <img src={ArrowDonw} alt="ArrowDonw" className="selectArrow" />
                    </div>
                </div>
            </div>
            <div className="slipageToggle">
                <div className="slipageList">
                    <div className="slipageListLeft">
                        <span>Minimum received</span>
                        <img src={InfoIcon} alt="InfoIcon" />
                    </div>
                    <div className="slipageListRight">0.003 ETH</div>
                </div>
                <div className="slipageList">
                    <div className="slipageListLeft">
                        <span>Price impact</span>
                        <img src={InfoIcon} alt="InfoIcon" />
                    </div>
                    <div className="slipageListRight"> <span className="fw6">0.5%</span></div>
                </div>
                <div className="slipageList">
                    <div className="slipageListLeft">
                        <span>Trading fee</span>
                        <img src={InfoIcon} alt="InfoIcon" />
                    </div>
                    <div className="slipageListRight"><span className="fw6">0.5%</span></div>
                </div>
                <div className="slipageList">
                    <div className="slipageListLeft">
                        <span>Route</span>
                        <img src={InfoIcon} alt="InfoIcon" />
                    </div>
                    <div className="slipageListRight">
                        <div className="slipageSelect">
                            <select name="" id="">
                                <option value="ETH > USDT">ETH > USDT</option>
                                <option value="USDT > ETH">USDT > ETH</option>
                            </select>
                            <img src={ArrowDonw} alt="ArrowDonw" className="selectArrow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Slippage;