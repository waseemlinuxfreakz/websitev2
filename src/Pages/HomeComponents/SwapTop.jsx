import React, { useState } from 'react';
import coinsData from './coins.json'; 
import CoinLinkAddress from './CoinLinkAddress';

import Ethereum from '../../assets/img/Ethereum.svg';
import USDT from '../../assets/img/USDT.svg';
import DownArrow from '../../assets/img/down-white.svg';

import SwapContainerMenu from './SwapContainerMenu';

const SwapTop = () => {


    const [selectedCoin, setSelectedCoin] = useState({
        icon: Ethereum,
        name: 'Ethereum',
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
        <div className="swap_top_menu">
            <div className="selectCoinLeft">
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
                            </li>
                        ))}
                    </ul>
            </div>
            <div className="swap_top_menu_right">
                <SwapContainerMenu/>
            </div>
        </div>
    );
};

export default SwapTop;
