import React from "react";
import Wallet from '../assets/img/Wallet.svg';
import { useWeb3Modal } from '@web3modal/react'

export default function ConnectWallet() {
    const { open } = useWeb3Modal();
    const onClickHandler = () => {
        open();
    }
    return (
        <div
            className="connectWallet"
            onClick={onClickHandler}
        >
            <div>
                <img src={Wallet} alt="Wallet" />
                Connect
            </div>
        </div>
    )
}

