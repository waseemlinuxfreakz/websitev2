import React, { useState, useEffect, useRef } from 'react';
import { useNetwork } from 'wagmi';
import Ethereum from '../../../assets/img/Ethereum.svg';
import DownArrow from '../../../assets/img/down-white.svg';
import chainData from '../Chain.json'

export default function DestinationChainDropdown () {

    const [isListVisible, setListVisible] = useState(false);

    function findChain (chain) {
        return chainData.find(c => chain && chain.id === c.id);
    }

    function handleChainClick (icon, name, id) {
        setSelectedChain({ icon, name });
        toggleVisibility();
    }

    const { chain } = useNetwork();

    let filteredChains;
    if(chain){
        filteredChains = chainData.filter(c => c.id !== chain.id);
    } else {
        filteredChains = chainData;
    }
    

    const [selectedChain, setSelectedChain] = useState({
        icon: chain && findChain(chain) ? findChain(chain).icon : Ethereum,
        name: chain && findChain(chain) ? findChain(chain).name : 'Ethereum',
    });

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
        {chain && filteredChains.map((chain) => (
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