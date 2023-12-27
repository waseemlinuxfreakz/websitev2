import React from 'react';
import './BridgeTransactionTop.css';
import { resetBridgeProgress } from '../../store/bridgeSlice';
import { useAppDispatch } from '../../hooks/storage';

function BridgeTransactionTop() {

    const dispatch = useAppDispatch();

    return (
        <div className="bridgeTransactionTop">
            <h2>Transfer</h2>
            <img
                src="./img/close-border.svg"
                alt="" className="backBtn"
                onClick={() => dispatch(resetBridgeProgress())} />
        </div>
    );
}

export default BridgeTransactionTop;