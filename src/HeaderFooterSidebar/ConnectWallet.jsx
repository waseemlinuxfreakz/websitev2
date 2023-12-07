import React from "react";
import Wallet from '../assets/img/Wallet.svg';
import { useWeb3Modal } from '@web3modal/react';
import { useAccount } from 'wagmi';
import {isMobile} from 'react-device-detect';

export default function ConnectWallet() {

    const { open } = useWeb3Modal();
    const { address, isConnected } = useAccount();

    const showCharacters = isMobile ? 3 : 6;

    return (
        <div
            className="connectWallet"
            onClick={() => open()}
        >
            <div>
                <img src={Wallet} alt="Wallet" />
                {isConnected
                ? `${address.slice(0,showCharacters)}...${address.slice(-showCharacters,)}`
                : 'Connect'}
                
            </div>
        </div>
    )
}

