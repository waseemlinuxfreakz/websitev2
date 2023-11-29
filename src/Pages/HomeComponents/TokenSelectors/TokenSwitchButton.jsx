import React from 'react';
import './TokenSwitchButton.css';
import SwitchBtn from '../../../assets/img/Switch-button.svg';

export default function TokenswitchButton() {

    const handleSwitchButtonClick = () => {
        // TODO:
        console.log("handleSwitchButtonClick: click")
      };

    return (
        <button className="switchBtn" onClick={handleSwitchButtonClick}>
            <img src={SwitchBtn} alt="Token Switch Button" />
        </button>
    )
}