import React, { useState, useEffect, useRef } from 'react';
import './TokenSelectionDropdown.css';
// Icons
import DownArrow from '../../../assets/img/down-white.svg';
import Fox from '../../../assets/img/fox.svg';
import Ethereum from '../../../assets/img/Ethereum.svg';
import USDT from '../../../assets/img/USDT.svg';
// Components
import CoinLinkAddress from '../CoinLinkAddress';
// Mock Data
import coinsData from '../coins.json';

export default function TokenSelectionDropdown ({type}) {

    const [isListVisible, setListVisible] = useState(false);
    const [selectedCoin, setSelectedCoin] = useState({
        icon: type && type == "from" ? Ethereum : USDT,
        name: type && type == "from" ? 'ETH' : 'USDT'
    });

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

    return (<div className="selectCoin" ref={selectCoinRef}>
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
                        <img src={Fox} alt="Metamask" />
                    </a>
                </div>
            </li>
        ))}
    </ul>
</div>)
}