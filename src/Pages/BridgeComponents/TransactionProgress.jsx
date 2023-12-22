import React, {useEffect, useState} from 'react';
import Success from '../../assets/img/Success-Flower.svg';

import { useAppSelector } from '../../hooks/storage';
import { findChain } from '../../utils';
import {ChainNameToTypeChainName}   from '../../types';
import TransactionCountUp from './TransactionCountUp';
import useBridgeSuccess from '../../hooks/useBridgeSuccess';

function TransactionProgress() {

    const bridge = useAppSelector((state) => state.bridge);
    const isSuccess = useBridgeSuccess();

    const [fromChain, setFromChain] = useState(findChain(ChainNameToTypeChainName[bridge.fromChain]));
    const [toChain, setToChain] = useState(findChain(ChainNameToTypeChainName[bridge.toChain]));

    useEffect(() => {
        if(bridge.fromChain){
            setFromChain(findChain(ChainNameToTypeChainName[bridge.fromChain]));
        }
    },[bridge.fromChain]);

    useEffect(() => {
        if(bridge.toChain){
            setToChain(findChain(ChainNameToTypeChainName[bridge.toChain]));
        }
    },[bridge.toChain]);

    return ( 
        
        <div className={`progressBox ${isSuccess && "progressSuccess"}`}>
            <div className="fromProgress">
                <img src={fromChain.icon} alt={fromChain.name} />
            </div>
                <div className="progressDetails">
                    <div className='progressTitle'>
                        <p className='FirstText'>Transaction in progress</p>
                        <p className="successText">
                            <img src={Success} alt="Success"/>
                            Successful transaction!
                        </p>
                    </div>
                    <TransactionCountUp />
                </div>
            <div className="toProgress">
                <img src={toChain.icon} alt={toChain.name} />
            </div>
        </div>
     );
}

export default TransactionProgress;