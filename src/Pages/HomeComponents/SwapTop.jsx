import React, { useState, useEffect, useRef } from 'react';
import chainsData from './Chain.json';
import { useNetwork, useSwitchNetwork } from 'wagmi'

import Ethereum from '../../assets/img/Ethereum.svg';
import DownArrow from '../../assets/img/down-white.svg';

import SwapContainerMenu from './SwapContainerMenu';

const SwapTop = () => {

    const findChain = (chain) => {
        return chainsData.find(c => chain.id === c.id);
    }

    const { chain } = useNetwork()
    const { switchNetwork } = useSwitchNetwork()

    const [selectedChain, setSelectedChain] = useState({
        icon: chain && findChain(chain) ? findChain(chain).icon : Ethereum,
        name: chain && findChain(chain) ? findChain(chain).name : 'Ethereum',
    });

    const [isListVisible, setListVisible] = useState(false);

    const handleChainClick = (icon, name, id) => {
        setSelectedChain({ icon, name });
        toggleVisibility();
        switchNetwork?.(id);
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
        <div className="swap_top_menu">
            <div className="selectCoinLeft" ref={selectCoinRef}>
                <div
                    className="selectedCoin"
                    onClick={toggleVisibility}
                >
                    <div className="coinNameIcon">
                        <img src={selectedChain.icon} alt={selectedChain.name} width="30px" />
                        <span>{selectedChain.name}</span>
                    </div>
                    <img src={DownArrow} alt="Down Arrow" />
                </div>
                <ul className={`selectCoinList ${isListVisible ? 'visible' : 'hidden'}`}>
                    {chainsData.map((chain) => (
                        <li className="coinItem" key={chain.id}>
                            <div
                                className="coinNameIcon"
                                onClick={() => handleChainClick(chain.icon, chain.name, chain.id)}
                            >
                                <img src={chain.icon} alt={chain.name} width="30px" />
                                <span>{chain.name}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="swap_top_menu_right">
                <SwapContainerMenu />
            </div>
        </div>
    );
};

export default SwapTop;
