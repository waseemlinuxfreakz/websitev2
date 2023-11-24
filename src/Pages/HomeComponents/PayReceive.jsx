import React, { useState } from 'react';
import SwapPay from './Pay';
import SwapReceive from './Receive';
import SwitchBtn from '../../assets/img/Switch-button.svg';

function PayReceive() {
    const [isPayVisible, setIsPayVisible] = useState(true);

    const handleSwitchClick = () => {
        setIsPayVisible(!isPayVisible);
    };

    return (
        <div className="payReciveContainer">
            <span className={isPayVisible ? "SwapPay_box" : "SwapReceive_box"}>
                {isPayVisible ? <SwapPay /> : <SwapReceive />}
            </span>
            <button className="switchBtn" onClick={handleSwitchClick}>
                <img src={SwitchBtn} alt="SwitchBtn" />
            </button>
            <span className={isPayVisible ? "SwapReceive_box" : "SwapPay_box"}>
                {isPayVisible ? <SwapReceive /> : <SwapPay />}
            </span>
        </div>
    );
}

export default PayReceive;
