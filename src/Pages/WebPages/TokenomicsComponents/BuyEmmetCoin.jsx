import React from 'react';

import './BuyEmmetCoin.css';
import ChainSelectorDropdown from '../../HomeComponents/ChainSelectorDropdown/ChainSelectorDropdown';


function BuyEmmetCoin() {
    return (
        <>
            <div className="iwantbuyEmmet">
                <div className="emmetBuyColum">
                    <div className="emmetSpentBox">
                        <p className="label">I want to spent</p>
                        <div className="emmetSpentinput">
                            <input type="text" value="0.5" />
                            <p>$2 527,76</p>
                            <span className="max">MAX</span>
                        </div>
                    </div>
                    <div className="emmetBalance">
                        <p className="label right-text">Balance: 0</p>
                        <div className="emmetBalanceDrop">
                            <ChainSelectorDropdown/>
                        </div>
                    </div>
                </div>
                <div className="emmetBuyColum">
                    <div className="emmetSpentBox">
                        <p className="label">I will receive</p>
                        <div className="emmetSpentinput">
                            <h2>128,840</h2>
                        </div>
                    </div>
                    <div className="emmetBalance">
                        <p className="label right-text">1 EMMET ≈ 0.000086 ETH</p>
                        <div className="receiveEmmet">
                           <img src="/img/emmet/Tokens.svg" alt="" /> <span>EMMET</span>
                        </div>
                    </div>
                </div>
            </div>
            <button className="connectWallet">Connect Wallet</button>
        </>
    );
}

export default BuyEmmetCoin;