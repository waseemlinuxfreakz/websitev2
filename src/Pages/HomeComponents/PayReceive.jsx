import React, { useState } from 'react';
import SwapPay from './Pay';
import SwapReceive from './Receive';
import SwitchBtn from '../../assets/img/Switch-button.svg';

function PayReceive() {
  const [isReceiveFirst, setReceiveFirst] = useState(false);

  const handleSwitchButtonClick = () => {
    setReceiveFirst((prevIsReceiveFirst) => !prevIsReceiveFirst);
  };

  return (
    <div className={`payReciveContainer ${isReceiveFirst ? 'receiveFirst' : ''}`}>
      <span className="SwapPay_box">
        <SwapPay />
      </span>
      <button className="switchBtn" onClick={handleSwitchButtonClick}>
        <img src={SwitchBtn} alt="SwitchBtn" />
      </button>
      <span className="SwapReceive_box">
        <SwapReceive />
      </span>
    </div>
  );
}

export default PayReceive;