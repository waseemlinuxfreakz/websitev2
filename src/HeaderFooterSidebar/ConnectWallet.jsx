import React from "react";
import Wallet from '../assets/img/Wallet.svg';
import { useWeb3Modal } from '@web3modal/react';
import { useAccount } from 'wagmi';

export default function ConnectWallet() {

    const { open } = useWeb3Modal();
    const { address, isConnected } = useAccount();

    return (
        <div
            className="connectWallet"
            onClick={() => open()}
        >
            <div>
                <img src={Wallet} alt="Wallet" />
                {isConnected
                ? `${address.slice(0,6)}...${address.slice(-6,)}`
                : 'Connect'}
                
            </div>
        </div>
    )
}

