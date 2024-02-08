import React from 'react';
import './BuyEmmet.css';
import CountdownTimer from './CountdownTimer';

import lineLeft from '../../../assets/img/web/Tokenomics/BuyEmmet/line-left.png';
import lineRight from '../../../assets/img/web/Tokenomics/BuyEmmet/line-right.png';
import BuyEmmetCoin from './BuyEmmetCoin';


function BuyEmmet() {

    const targetDate = new Date('February 21, 2024 00:00:00 GMT+00:00');

    return (
        <>
            <div className="buyEmmet">
                <h3>Buy $EMMET</h3>
                <div className="buyEmmetInner">
                    <div className="buyTopBoxWrap">
                        <div className="buyTopBox buyPreeSeed">
                            <h5>Pre-Seed</h5>
                            <h6>Hard Cap <span>$250K</span></h6>
                            <div className="preseedLine">
                                <div className="preseedLineProgress"></div>
                            </div>
                        </div>
                        <div className="buyTopBox inactive buyPriSeed">
                            <h5>Private Seed</h5>
                            <a href="#" className="notifyMe">Notify me</a>
                        </div>
                        <div className="buyTopBox inactive buyCommu">
                            <h5>Community</h5>
                            <a href="#" className="notifyMe">Notify me</a>
                        </div>
                    </div>
                    <div className="emmetTousd">
                        <img src={lineLeft} className='lineImg' alt="Line" />
                        <span>1 EMMET = $0.01</span>
                        <img src={lineRight} className='lineImg' alt="Line" />
                    </div>
                    <div className="priceIncress">
                        <p>Price increases in:</p>
                        <div className="timer">
                            <CountdownTimer targetDate={targetDate} />
                        </div>
                    </div>
                    <BuyEmmetCoin />
                </div>
            </div>
            <div className="buyEmmetFooter">
                Min contribution: <span>500,000 EMMET</span>
            </div>
        </>
    );
}

export default BuyEmmet;