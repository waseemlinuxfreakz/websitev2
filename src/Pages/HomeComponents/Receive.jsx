import React, { useState, useEffect, useRef } from 'react';
import coinsData from './coins.json'; 

import Wallet from '../../assets/img/Wallet.svg';
import DownArrow from '../../assets/img/down-white.svg';
import Fox from '../../assets/img/fox.svg';
import Ethereum from '../../assets/img/Ethereum.svg';
import USDT from '../../assets/img/USDT.svg';

import CoinLinkAddress from './CoinLinkAddress';
import WalletBalance from './WalletBalance/WalletBalance';

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
	
	const selectCoinRef = useRef(null);
	
	useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectCoinRef.current && !selectCoinRef.current.contains(event.target)) {
        setListVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

    return (
        <div className="SwapReceive swapPayReceive">
            <div className="payReLeftBox">
                <div className="payReLeft reveiveoption">
                    <p>Receive</p>
                    <h2 className="amount">0.0</h2>
                </div>
                <div className="payReLeft payOption">
                    <div className="payInput">
                        <p>Pay</p>
                    </div>
                    <h2 className="amount"><input type="number" placeholder='0.0' /></h2>
                </div>
            </div>
            <div className="payReRight">
                <WalletBalance 
                    name={selectedCoin.name}
                />
                <div className="selectCoin" ref={selectCoinRef}>
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
