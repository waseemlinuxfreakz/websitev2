import React from 'react';
import Wallet from '../../assets/img/Wallet.svg';
import Ethereum from '../../assets/img/Ethereum.svg';
import USDT from '../../assets/img/USDT.svg';
import DownArrow from '../../assets/img/down-white.svg';

function SwapReceive() {
    return ( 
        <div className="SwapReceive swapPayReceive">
            <div className="payReLeft">
                <p>Receive</p>
                <h2 className="amount">0.0</h2>
            </div>
            <div className="payReRight">
                <div className="walletAddress">
                    <img src={Wallet} alt="USDT" />
                    <span>64.02</span>
                    <span>USDT</span>
                </div>
                <div className="selectCoin">
                    <div className="selectedCoin">
                        <img src={USDT} alt="USDT" />
                        <span>USDT</span>
                        <img src={DownArrow} alt="USDT" />
                    </div>
                    <ul className="selectCoinList">
                        <li className="coinItem">
                            <img src={Ethereum} alt="Ethereum" />
                            <span>Ethereum</span>
                        </li>
                        <li className="coinItem">
                            <img src={USDT} alt="USDT" />
                            <span>USDT</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default SwapReceive;