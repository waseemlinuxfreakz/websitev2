import React, { useState, useEffect, useRef } from 'react';
import { useNetwork, useSwitchNetwork } from 'wagmi'

import Ethereum from '../../../assets/img/Ethereum.svg';
import DownArrow from '../../../assets/img/down-white.svg';
import chainData from '../../../store/Chain.json';

import { useAppSelector, useAppDispatch } from '../../../hooks/storage';
import { setBridgeFromChain } from '../../../store/bridgeSlice';
import { setSwapFromChain } from '../../../store/swapSlice';

const findChain = (chain) => {
    return chainData.find(c => chain && chain.id === c.id);
}

export default function ChainSelectorDropdown({ parent, direction }) {

    const { chain } = useNetwork();
    const { switchNetwork } = useSwitchNetwork();

    // Global State
    const bridge = useAppSelector(state => state.bridge);
    const swap = useAppSelector(state => state.swap);
    const [ chainArray, setChainArray] = useState(chainData);
    const dispatch = useAppDispatch();

    // Local State
    const [selectedChain, setSelectedChain] = useState({
        icon: chain && findChain(chain) ? findChain(chain).icon : Ethereum,
        name: chain && findChain(chain) ? findChain(chain).name : 'Ethereum',
    });

    const [isListVisible, setListVisible] = useState(false);

    function dispatchChain (name) {
        switch (parent) {
            case 'bridge':
                dispatch(setBridgeFromChain(name));
                setChainArray(bridge.fromChains);
                console.log("chainArray:", chainArray)
                break;
            case 'swap':
                dispatch(setSwapFromChain(name));
                setChainArray(chainData);
                break;
            case 'explorer':
                break;
            default:

        }
    }

    useEffect(() => {
        let selChain;
        if (chain) {
            selChain = findChain(chain);
            if (selChain) {
                setSelectedChain({
                    icon: selChain.icon,
                    name: selChain.name
                });
                dispatchChain(selChain.name)
            }
        } 
    }, [chain]);

    const handleChainClick = (icon, name, id) => {
        setSelectedChain({ icon, name });
        dispatchChain(name);
        toggleVisibility();
        if(parent != 'explorer'){
            switchNetwork?.(id);
        }
        
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
            <ul className={`selectCoinList ${isListVisible
                ? 'visible'
                : 'hidden'}`}>
                {chainArray.map((chain) => (
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
        </div>
    )
}