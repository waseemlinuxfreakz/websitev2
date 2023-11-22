import React from 'react';
import Wallet from '../../assets/img/Wallet.svg';
import Ethereum from '../../assets/img/Ethereum.svg';
import USDT from '../../assets/img/USDT.svg';
import DownArrow from '../../assets/img/down-white.svg';

function SwapPay() {
    return ( 
        <div className="SwapPay swapPayReceive">
            <div className="payReLeft">
                <div className="payInput">
                    <p>Pay</p>
                </div>
                <h2 className="amount"><input type="number" placeholder='0.0' /></h2>
            </div>
            <div className="payReRight">
                <div className="walletAddress">
                    <img src={Wallet} alt="Wallet" />
                    <span>0.005689</span>
                    <span>ETH</span>
                </div>
                    
                <div className="selectCoin">
                    <div className="selectedCoin">
                        <img src={Ethereum} alt="Ethereum" />
                        <span>Ethereum</span>
                        <img src={DownArrow} alt="Ethereum" />
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

export default SwapPay;