import React from 'react';

import Ethereum from '../../assets/img/Ethereum.svg';
import USDT from '../../assets/img/USDT.svg';
import SwapMenuBtn from '../../assets/img/Icon-button.svg';
import DownArrow from '../../assets/img/down-white.svg';

function SwapTop() {
    return ( 
        <div className="swap_top_menu">
            <div className="selectCoinLeft">
                <div className="selectedCoin">
                    <img src={Ethereum} alt="Ethereum" />
                    <span>Ethereum</span>
                    <img src={DownArrow} alt="Ethereum" />
                </div>
                <ul className="selectCoinList">
                    <li className="coinItem">
                        <img src={Ethereum} alt="Ethereum" />
                        <span>Ethereum</span>
                    </li>
                    <li className="coinItem">
                        <img src={USDT} alt="USDT" />
                        <span>USDT</span>
                    </li>
                </ul>
            </div>
            <div className="swap_top_menu_right">
                <button className='swapMenuBtn'><img src={SwapMenuBtn} alt="SwapMenuBtn" /></button>
            </div>
        </div>
     );
}

export default SwapTop;