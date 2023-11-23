import React, { useState } from 'react';

import Ethereum from '../../assets/img/Ethereum.svg';
import USDT from '../../assets/img/USDT.svg';
import DownArrow from '../../assets/img/down-white.svg';

import ETH from '../../assets/img/coin/eth.svg';
import Emmet from '../../assets/img/coin/emmet.svg';
import Scroll from '../../assets/img/coin/scoll.svg';
import Op from '../../assets/img/coin/op.svg';
import USDC from '../../assets/img/coin/usdc.svg';
import DIA from '../../assets/img/coin/dai.svg';

import SwapContainerMenu from './SwapContainerMenu';

const SwapTop = () => {
    const [showSelectCoinList, setShowSelectCoinList] = useState(false);
    const [selectedCoin, setSelectedCoin] = useState({
        image: Ethereum,
        name: 'Ethereum',
    });

    const handleSelectedCoinClick = () => {
        // Toggle the state when .selectedCoin is clicked
        setShowSelectCoinList(!showSelectCoinList);
    };

    const handleCoinItemClick = (image, name) => {
        // Update the selected coin when a coin item is clicked
        setSelectedCoin({ image, name });
        setShowSelectCoinList(false);
    };

    return (
        <div className="swap_top_menu">
            <div className="selectCoinLeft">
                <div className="selectedCoin" onClick={handleSelectedCoinClick}>
                    <div className="coinNameIcon">
                        <img src={selectedCoin.image} alt={selectedCoin.name} />
                        <span>{selectedCoin.name}</span>
                        <img src={DownArrow} alt={selectedCoin.name} />
                    </div>
                </div>
                {showSelectCoinList && (
                    <ul className="selectCoinList">
                        <li className="coinItem">
                            <div
                                className="coinNameIcon"
                                onClick={() => handleCoinItemClick(ETH, 'ETH')}
                            >
                                <img src={ETH} alt="ETH" />
                                <span>ETH</span>
                            </div>
                        </li>
                        <li className="coinItem">
                            <div
                                className="coinNameIcon"
                                onClick={() => handleCoinItemClick(Emmet, 'Emmet')}
                            >
                                <img src={Emmet} alt="Emmet" />
                                <span>Emmet</span>
                            </div>
                        </li>
                        <li className="coinItem">
                            <div
                                className="coinNameIcon"
                                onClick={() => handleCoinItemClick(Scroll, 'Scroll')}
                            >
                                <img src={Scroll} alt="Scroll" />
                                <span>Scroll</span>
                            </div>
                        </li>
                        <li className="coinItem">
                            <div
                                className="coinNameIcon"
                                onClick={() => handleCoinItemClick(Op, 'Op')}
                            >
                                <img src={Op} alt="Op" />
                                <span>OP</span>
                            </div>
                        </li>
                        <li className="coinItem">
                            <div
                                className="coinNameIcon"
                                onClick={() => handleCoinItemClick(USDT, 'USDT')}
                            >
                                <img src={USDT} alt="USDT" />
                                <span>USDT</span>
                            </div>
                        </li>
                        <li className="coinItem">
                            <div
                                className="coinNameIcon"
                                onClick={() => handleCoinItemClick(USDC, 'USDC')}
                            >
                                <img src={USDC} alt="USDC" />
                                <span>USDC</span>
                            </div>
                        </li>
                        <li className="coinItem">
                            <div
                                className="coinNameIcon"
                                onClick={() => handleCoinItemClick(DIA, 'DIA')}
                            >
                                <img src={DIA} alt="DIA" />
                                <span>DIA</span>
                            </div>

                        </li>
                    </ul>
                )}
            </div>
            <div className="swap_top_menu_right">
                <SwapContainerMenu/>
            </div>
        </div>
    );
};

export default SwapTop;
