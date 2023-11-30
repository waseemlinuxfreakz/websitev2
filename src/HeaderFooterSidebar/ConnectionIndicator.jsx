import { useEffect, useState, useRef } from 'react'
import EthereumTop from '../assets/img/Ethereum.svg';
import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi'

import chainsData from '../Pages/HomeComponents/Chain.json';
import Ethereum from '../assets/img/Ethereum.svg';
import DownArrow from '../assets/img/down-white.svg';
import chainData from '../Pages/HomeComponents/Chain.json';

export default function ConnectionIndicator() {

    const { isConnected } = useAccount();
    const { chain } = useNetwork();
    const [logo, setLogo] = useState(EthereumTop);
    const [chainName, setChainName] = useState('');
    const { switchNetwork } = useSwitchNetwork()
    
    const findChain = (chain) => {
        return chainsData.find(c => chain && chain.id === c.id);
    }
    
    const [selectedChain, setSelectedChain] = useState({
        icon: chain && findChain(chain) ? findChain(chain).icon : Ethereum,
        name: chain && findChain(chain) ? findChain(chain).name : 'Ethereum',
    });

    const [isListVisible, setListVisible] = useState(false);

    useEffect(() => {
        if (chain) {
            const selChain = chainData.find(c => chain.id === c.id);
            if (selChain) {
                setSelectedChain({ 
                    icon:selChain.icon,
                    name:selChain.name });
            }
        }
    }, [chain]);

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
        <>

            <div className="EthereumTop">
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
                        {chain && chainsData.map((chain) => (
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
            </div>

            <div className="EthereumTop">
                {isConnected
                    ? <img src={logo} alt={`Connected to ${chainName}`} width="30px" />
                    : ''
                }
            </div>

        </>
    )
}