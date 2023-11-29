import React from 'react';
import './TokenSelectorBox.css';
// Components
import WalletBalance from '../WalletBalance/WalletBalance';
import TokenSelectionDropdown from './TokenSelectionDropdown';

export default function TokenSelectorBox({ type }) {

    return (
        <span className={type && type == "from"
            ? "order1"
            : "order3"}>
            <div className="SwapPay swapPayReceive">
                <div className="payReLeftBox">
                    <div className="payReLeft payOption">
                        <div className="payInput">
                            <p>{type && type === "from"
                                ? "Pay"
                                : "Receive"}</p>
                        </div>
                        <h2 className="amount">
                            <input
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
                    // TODO: make dynamic
                        name={"ETH"}
                    />
                    < TokenSelectionDropdown
                        type={type}
                    />
                </div>
            </div>
        </span>
    )
}