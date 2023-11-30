import React from 'react';
import './TokenSelectorBox.css';
// Components
import WalletBalance from '../WalletBalance/WalletBalance';
import TokenSelectionDropdown from './TokenSelectionDropdown';

import { useAppSelector, useAppDispatch } from '../../../hooks/storage';
import {setFromToken, setToToken} from '../../../store/swapSlice';

export default function TokenSelectorBox({ type }) {

    // Global state
    const swap = useAppSelector((state) => state.swap);

    function onInputChange (e) {
        console.log("onInputChange:", Number(e.target.value))
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
                                ? "Pay"
                                : "Receive"}</p>
                        </div>
                        <h2 className="amount">
                            <input
                            onChange={e => onInputChange(e)}
                                type="number"
                                placeholder='0.0'
                                disabled={type && type === "to"
                                    ? true
                                    : false}
                            />
                        </h2>
                    </div>
                </div>
                <div className="payReRight">
                    < WalletBalance
                        name={isFromType() ? swap.fromToken : swap.toToken}
                    />
                    < TokenSelectionDropdown
                        type={type}
                    />
                </div>
            </div>
        </span>
    )
}