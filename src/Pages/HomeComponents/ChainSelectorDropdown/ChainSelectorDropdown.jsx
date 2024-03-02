import React, { useState, useEffect, useRef } from 'react';
import { useNetwork, useSwitchNetwork } from 'wagmi'

import DownArrow from '../../../assets/img/down-white.svg';
import chainData from '../../../store/Chain.json';
import ReactGA from 'react-ga';
import { useAppSelector, useAppDispatch } from '../../../hooks/storage';
import { setBridgeFromChain, setBridgeAmount } from '../../../store/bridgeSlice';
import { setSwapFromChain } from '../../../store/swapSlice';
import { isMobile } from 'react-device-detect';

const findChain = (chain) => {
    return chainData.find(c => chain && chain.id === c.id);
}

export default function ChainSelectorDropdown({ parent, direction }) {

    const { chain } = useNetwork();
    const { switchNetwork } = useSwitchNetwork();

    // Global State
    const bridge = useAppSelector(state => state.bridge);
    const [ chainArray, setChainArray] = useState(chainData);
    const dispatch = useAppDispatch();

    const isLayer2View = () => 
        window.location.href.includes("/your-liquidity")
        || window.location.href.includes("/transactionDetails/");

    const isExplorer = () => window.location.href.includes('/explorer');

    // Local State
    const [selectedChain, setSelectedChain] = useState({
        icon: chain && findChain(chain) ? `${isLayer2View() ? "..": ""}${findChain(chain).icon}` : "/img/chain/avalanche.svg",
        name: chain && findChain(chain) ? findChain(chain).name : 'Avalanche',
    });

    const [isListVisible, setListVisible] = useState(false);

    function dispatchChain (name) {
        switch (parent) {
            case 'bridge':
                dispatch(setBridgeFromChain(name));
                setChainArray(bridge.fromChains);
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

        if(parent === "bridge"){
            setChainArray(bridge.toChains);
            const oldBridgeAmount = bridge.amount;
            dispatch(setBridgeAmount(0));
            dispatch(setBridgeAmount(oldBridgeAmount));
        }

    },[bridge.toChain]);

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
        ReactGA.event({
            category: 'User',
            action: 'Clicked Button',
            label: 'Select a Swap Chain'
          });
          
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


    const componentStyles = isExplorer() && isMobile ? {
        bottom: 0,
        position: "fixed",
        zIndex: 111,
        left: 0,
        right: 0,
        top: "unset",
        borderRadius: "16px 16px 0px 0px",
        borderTop: "1px solid #3C3F43",
        background: "#1B1D20",
        maxHeight: "50vh",
        overflow: "auto"
        
    } : {
        bottom: 83,
        zIndex: 111,
        // left: 0,
        // right: 0,
        // top: "unset",
        borderRadius: "16px",
        borderTop: "1px solid #3C3F43",
        background: "#1B1D20",
        maxHeight: "50vh",
        // overflow: "auto",
        height: chainArray.length * 44
    }

    return (
        <div className="selectCoinLeft" ref={selectCoinRef}>
            <div
                className="selectedCoin"
                onClick={toggleVisibility}
            >
                <div className="coinNameIcon">
                    <img 
                    src={`${isLayer2View() ? '../' : ''}${selectedChain.icon}`} 
                    alt={selectedChain.name} width="30px" />
                    <span>{selectedChain.name}</span>
                </div>
                <img src={DownArrow} alt="Down Arrow" />
            </div>
            <ul className={`selectCoinList
            ${isListVisible
                ? 'visible'
                : 'hidden'}`} 
            style={componentStyles}
            >
                {chainArray.map((chain) => (
                    <li className="coinItem" key={chain.id}>
                        <div
                            className="coinNameIcon"
                            onClick={() => handleChainClick(
                                `${isLayer2View() ? '../' : ''}${chain.icon}`,
                                chain.name,
                                chain.id)}
                        >
                            <img
                                src={`${isLayer2View() ? '../' : ''}${chain.icon}`}
                                alt={chain.name} width="30px" />
                            <span>{chain.name}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}