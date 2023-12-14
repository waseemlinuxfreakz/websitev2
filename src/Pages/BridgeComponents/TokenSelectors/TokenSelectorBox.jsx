import React, { useState } from 'react';
import './TokenSelectorBox.css';
// Components
import WalletBalance from '../../HomeComponents/WalletBalance/WalletBalance';
import TokenSelectionDropdown from './TokenSelectionDropdown';

import { useAppSelector, useAppDispatch } from '../../../hooks/storage';
import { setBridgeAmount } from '../../../store/bridgeSlice';
import ChainSelectorDropdown from '../../HomeComponents/ChainSelectorDropdown/ChainSelectorDropdown';
import DestinationChainDropdown from '../../HomeComponents/ChainSelectorDropdown/DestinationChainDropdown';

import { sanitizeNumber } from '../../../utils/sanitizeNumber';

export default function TokenSelectorBox({ type }) {

    const dispatch = useAppDispatch();

    // Global state
    const bridge = useAppSelector((state) => state.bridge);

    function onInputChange(e) {
        e.preventDefault();
        if(e.target.value){
            const sanitized = sanitizeNumber(e.target.value);
            dispatch(setBridgeAmount(sanitized));
        }else{
            dispatch(setBridgeAmount(''));
        }
        
    }

    function isFromType() {
        return type && type == "from";
    }

    return (
        <span className={isFromType()
            ? "order1"
            : "order3"}>
            <div className="SwapPay swapPayReceive">
                <div className="payReLeftBox">
                    <div className="payReLeft payOption">
                        <div className="payInput">
                            <p>{isFromType()
                                ? "From"
                                : "To"}</p>
                            {isFromType()
                                ? < ChainSelectorDropdown
                                    parent="bridge"
                                    direction='from'
                                />
                                : <DestinationChainDropdown />}
                        </div>
                        <h2 className="amount">
                            <input
                                onChange={e => onInputChange(e)}
                                type="number"
                                placeholder='0.0'
                                disabled={type && type === "to"
                                    ? true
                                    : false}
                                value={type && type === "from"
                                    ? bridge.amount
                                    : bridge.receive
                                }
                            />
                        </h2>
                    </div>
                </div>
                <div className="payReRight">
                    < WalletBalance
                        name={isFromType() ? bridge.fromToken : bridge.toToken}
                    />
                    < TokenSelectionDropdown
                        type={type}
                    />
                </div>
            </div>
        </span>
    )
}