import React from "react";
import Wallet from '../assets/img/Wallet.svg';

export default function ConnectWallet() {
    const onClickHandler = () => {
        console.log("ConnectWallet click")
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

