import React, { useState } from 'react';
import coinsData from './coins.json'; 

import Wallet from '../../assets/img/Wallet.svg';
import Ethereum from '../../assets/img/Ethereum.svg';
import USDT from '../../assets/img/USDT.svg';
import DownArrow from '../../assets/img/down-white.svg';
import Copy from '../../assets/img/copy.svg';
import Fox from '../../assets/img/fox.svg';

import ETH from '../../assets/img/coin/eth.svg';
import Emmet from '../../assets/img/coin/emmet.svg';
import Scroll from '../../assets/img/coin/scoll.svg';
import Op from '../../assets/img/coin/op.svg';
import USDC from '../../assets/img/coin/usdc.svg';
import DIA from '../../assets/img/coin/dai.svg';
import CoinLinkAddress from './CoinLinkAddress';


const SwapPayNew = () => {
    const [showSelectCoinList, setShowSelectCoinList] = useState(false);
    const [selectedCoin, setSelectedCoin] = useState({
        image: ETH,
        name: 'ETH',
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
        <div className="SwapPay swapPayReceive">
            <div className="payReLeft">
                <div className="payInput">
                    <p>Pay</p>
                </div>
                <h2 className="amount"><input type="number" placeholder='0.0' /></h2>
            </div>
            <div className="payReRight">
                <div className="walletAddress">
                    <img src={Wallet} alt="Wallet" />
                    <span>0.005689</span>
                    <span>ETH</span>
                </div>
                    
                <div className="selectCoin">
                    <div className="selectedCoin" onClick={handleSelectedCoinClick}>
                        <div className="coinNameIcon">
                            <img src={selectedCoin.image} alt={selectedCoin.name} />
                            <span>{selectedCoin.name}</span>
                        </div>
                        <img src={DownArrow} alt="Ethereum" />
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
                                <div className="coinItemRight">
                                    <CoinLinkAddress/>
                                    <a href="#" className="foxLink"><img src={Fox} alt="Fox" /></a>
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
                                <div className="coinItemRight">
                                    <CoinLinkAddress/>
                                    <a href="#" className="foxLink"><img src={Fox} alt="Fox" /></a>
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
                                <div className="coinItemRight">
                                    <CoinLinkAddress/>
                                    <a href="#" className="foxLink"><img src={Fox} alt="Fox" /></a>
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
                                <div className="coinItemRight">
                                    <CoinLinkAddress/>
                                    <a href="#" className="foxLink"><img src={Fox} alt="Fox" /></a>
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
                                <div className="coinItemRight">
                                    <CoinLinkAddress/>
                                    <a href="#" className="foxLink"><img src={Fox} alt="Fox" /></a>
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
                                <div className="coinItemRight">
                                    <CoinLinkAddress/>
                                    <a href="#" className="foxLink"><img src={Fox} alt="Fox" /></a>
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

                                <div className="coinItemRight">
                                    <CoinLinkAddress/>
                                    <a href="#" className="foxLink"><img src={Fox} alt="Fox" /></a>
                                </div>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
     );
}

export default SwapPayNew;



