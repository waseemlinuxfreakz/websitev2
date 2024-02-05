import React from 'react';

import './Distribution.css';
import EmmetSupply from '../../../assets/img/web/Tokenomics/Distribution/EmmetSupply.svg';
import EmmetSupplyMob from '../../../assets/img/web/Tokenomics/Distribution/EmmetSupply-Mob.svg';


function Distribution() {
    return ( 
        <div className="distributionContainer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="dustruLeft">
                            <h2>$EMMET Distribution</h2>
                            {/* <img src={EmmetSupplyMob} alt="Distribution" className="tokMobImg distribution" /> */}
                            <div className="distributionBox">
                                <h4>Investors</h4>
                                <ul>
                                    <li><span className="colorBox pseed"></span> <span>2%</span> Pre-Seed</li>
                                    <li><span className="colorBox prse"></span> <span>2%</span> Private Seed</li>
                                    <li><span className="colorBox comsal"></span> <span>2%</span> Community Sale</li>
                                    <li><span className="colorBox stratInv"></span> <span>5%</span> Strategic Investors</li>
                                    <li><span className="colorBox publicSale"></span> <span>1%</span> Public Sale: IDO (TGE)</li>
                                </ul>
                            </div>
                            <div className="distributionBox">
                                <h4>Ecosystem</h4>
                                <ul>
                                    <li><span className="colorBox teamCore"></span> <span>14%</span> Team Core</li>
                                    <li><span className="colorBox marketingPar"></span> <span>14%</span> Marketing & Partnerships</li>
                                    <li><span className="colorBox liquiRew"></span> <span>20%</span> Liquidity Rewards</li>
                                    <li><span className="colorBox stakingRew"></span> <span>20%</span> Staking Rewards</li>
                                    <li><span className="colorBox echoSys"></span> <span>20%</span> Ecosystem Fund</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="dustruRight">
                            <img src={EmmetSupply} alt="Distribution" className="distribution" />
                        </div>
                    </div>
                </div>
                <div className="distributionContent">
                </div>
            </div>
        </div>
     );
}

export default Distribution;