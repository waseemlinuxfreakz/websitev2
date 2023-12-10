import React, { useState, useEffect, useRef } from 'react';
import { useNetwork } from 'wagmi';
import Ethereum from '../../../assets/img/Ethereum.svg';
import DownArrow from '../../../assets/img/down-white.svg';
import chainData from '../../../store/Chain.json';
import { useAppSelector, useAppDispatch } from '../../../hooks/storage';
import { setBridgeToChain } from '../../../store/bridgeSlice';

export default function DestinationChainDropdown () {

    const findChain = (chain) => {
        return chainData.find(c => chain && chain.id === c.id);
    }

    const bridge = useAppSelector((state) => state.bridge);
    const dispatch = useAppDispatch();

    const { chain } = useNetwork();

    const [isListVisible, setListVisible] = useState(false);
    const [selectedChain, setSelectedChain] = useState({
        icon: chain && findChain(chain) ? findChain(chain).icon : Ethereum,
        name: chain && findChain(chain) ? findChain(chain).name : 'Ethereum',
    });

    function handleChainClick (icon, name, id) {
        setSelectedChain({ icon, name });
        toggleVisibility();
        dispatch(setBridgeToChain(name));
    }

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
      
    return (<div className="selectCoinLeft" ref={selectCoinRef}>
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
    <ul className={`selectCoinList ${isListVisible 
        ? 'visible' 
        : 'hidden'}`}>
        {bridge.toChains.map((chain) => (
            <li className="coinItem" key={chain.id}>
                <div
                    className="coinNameIcon"
                    onClick={() => handleChainClick(
                        chain.icon, 
                        chain.name, 
                        chain.id)}
                >
                    <img 
                    src={chain.icon} 
                    alt={chain.name} width="30px" />
                    <span>{chain.name}</span>
                </div>
            </li>
        ))}
    </ul>
</div>)
}