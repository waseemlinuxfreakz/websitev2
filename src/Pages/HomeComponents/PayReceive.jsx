import React from 'react';
import SwapPay from './Pay';
import SwapReceive from './Receive';
import SwitchBtn from '../../assets/img/Switch-button.svg';

function PayReceive() {
    return ( 
        <div className="payReciveContainer">
            <SwapPay/>
                <button className="switchBtn"><img src={SwitchBtn} alt="SwitchBtn" /></button>
            <SwapReceive/>
        </div>
     );
}

export default PayReceive;