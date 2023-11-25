import React, { useState } from 'react';
import coinsData from './coins.json'; 

import Wallet from '../../assets/img/Wallet.svg';
import DownArrow from '../../assets/img/down-white.svg';
import Fox from '../../assets/img/fox.svg';
import Ethereum from '../../assets/img/Ethereum.svg';
import USDT from '../../assets/img/USDT.svg';

import CoinLinkAddress from './CoinLinkAddress';

const SwapReceive = () => {
    const [selectedCoin, setSelectedCoin] = useState({
        icon: USDT,
        name: 'USDT',
    });

    const [isListVisible, setListVisible] = useState(false);

    const handleCoinClick = (icon, name) => {
        setSelectedCoin({ icon, name });
        toggleVisibility();
    };

    const toggleVisibility = () => {
        setListVisible(!isListVisible);
    };

    return (
        <div className="SwapPay swapPayReceive">
            <div className="payReLeft">
                <p>Receive</p>
                <h2 className="amount">0.0</h2>
            </div>
            <div className="payReRight">
                <div className="walletAddress">
                    <img src={Wallet} alt="Wallet" />
                    <span>0.005689</span>
                    <span>{selectedCoin.name}</span>
                </div>
                <div className="selectCoin">
                    <div
                        className="selectedCoin"
                        onClick={toggleVisibility}
                    >
                        <div className="coinNameIcon">
                            <img src={selectedCoin.icon} alt={selectedCoin.name} />
                            <span>{selectedCoin.name}</span>
                        </div>
                        <img src={DownArrow} alt="Down Arrow" />
                    </div>
                    <ul className={`selectCoinList ${isListVisible ? 'visible' : 'hidden'}`}>
                        {coinsData.map((coin) => (
                            <li className="coinItem" key={coin.name}>
                                <div
                                    className="coinNameIcon"
                                    onClick={() => handleCoinClick(coin.icon, coin.name)}
                                >
                                    <img src={coin.icon} alt={coin.name} />
                                    <span>{coin.name}</span>
                                </div>
                                <div className="coinItemRight">
                                    <CoinLinkAddress />
                                    <a href="#" className="foxLink">
                                        <img src={Fox} alt="Fox" />
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default SwapReceive;