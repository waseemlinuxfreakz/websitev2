import React, { useEffect, useState } from 'react';
import Wallet from '../../../assets/img/Wallet.svg';
import './WalletBalance.css';
import { fetchBalance, getAccount, getNetwork } from '@wagmi/core';
// @ts-ignore
import { getTokenAddress } from '../../../constants/tokens.ts';


export default function WalletBalance({ name }) {

    const [balance, setBalance] = useState('0');

    const account = getAccount();
    const { chain } = getNetwork();
    let tokenAddress;
    if (chain) {
        tokenAddress = getTokenAddress(chain.id, name);
    }


    useEffect(() => {

        async function fetchTokenBalance(address) {
            if(chain){
                const bal = await fetchBalance({
                    address,
                    chainId: chain.id,
                    token: tokenAddress
                });
                setBalance(bal.formatted.slice(0, 8));
            }
        }

        if (account.isConnected && chain && tokenAddress) {
            fetchTokenBalance(account.address);
        }

        if (!tokenAddress) {
            setBalance('0.00');
        }

    }, [account, chain, tokenAddress]);


    return (
        <div className="walletBalance">
            <img src={Wallet} alt="Wallet" />
            <span>{balance}</span>
            <span>{name}</span>
        </div>
    )
}