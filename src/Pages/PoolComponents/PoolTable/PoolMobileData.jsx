import React, { useState } from 'react';
import USDT from '../../../assets/img/coin/usdc.svg';
import ETH from '../../../assets/img/coin/eth.svg';
import Yourliquidity from './Yourliquidity';

function PoolMobileData() {
    const [isYourLiquidityVisible, setYourLiquidityVisible] = useState(false);
        
    const handleAddPollClick = () => {
        setYourLiquidityVisible(!isYourLiquidityVisible);
    };

    return ( 
        <>
        <div className="poolMobileData">
            <div className="poolBox addDepositBox">
                <div className="poolboxTop">
                    <div className="poolboxTopLeft">
                        <div className="chainToken">
                            <img src={USDT} alt="USDT" className="mainChain" />
                            <img src={ETH} alt="ETH" className="onChain" />
                        </div>
                        <div className="">
                            <h2>USDC</h2>
                            on Ethereum
                        </div>
                    </div>
                </div>
                <div className="poolboxBottom">
                    <div className="row">
                        <div className="col-6">
                            <h4>Total liquidity (USDC)</h4>
                            <h3>238.9</h3>
                        </div>
                        <div className="col-6">
                            <h4>APY (%)</h4>
                            <h3>0.6%</h3>
                        </div>
                        <div className="addDeposit">
                            <a href='./pool/your-liquidity' className="addDepositBtn" onClick={handleAddPollClick}>+ Add deposit</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="poolBox addDepositBox">
                <div className="poolboxTop">
                    <div className="poolboxTopLeft">
                        <div className="chainToken">
                            <img src={USDT} alt="USDT" className="mainChain" />
                            <img src={ETH} alt="ETH" className="onChain" />
                        </div>
                        <div className="">
                            <h2>USDC</h2>
                            on Ethereum
                        </div>
                    </div>
                </div>
                <div className="poolboxBottom">
                    <div className="row">
                        <div className="col-6">
                            <h4>Total liquidity (USDC)</h4>
                            <h3>238.9</h3>
                        </div>
                        <div className="col-6">
                            <h4>APY (%)</h4>
                            <h3>0.6%</h3>
                        </div>
                        <div className="addDeposit">
                            <a href='./pool/your-liquidity' className="addDepositBtn" onClick={handleAddPollClick}>+ Add deposit</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="poolBox addDepositBox">
                <div className="poolboxTop">
                    <div className="poolboxTopLeft">
                        <div className="chainToken">
                            <img src={USDT} alt="USDT" className="mainChain" />
                            <img src={ETH} alt="ETH" className="onChain" />
                        </div>
                        <div className="">
                            <h2>USDC</h2>
                            on Ethereum
                        </div>
                    </div>
                </div>
                <div className="poolboxBottom">
                    <div className="row">
                        <div className="col-6">
                            <h4>Total liquidity (USDC)</h4>
                            <h3>238.9</h3>
                        </div>
                        <div className="col-6">
                            <h4>APY (%)</h4>
                            <h3>0.6%</h3>
                        </div>
                        <div className="addDeposit">
                            <a href='./pool/your-liquidity' className="addDepositBtn" onClick={handleAddPollClick}>+ Add deposit</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="poolBox addDepositBox">
                <div className="poolboxTop">
                    <div className="poolboxTopLeft">
                        <div className="chainToken">
                            <img src={USDT} alt="USDT" className="mainChain" />
                            <img src={ETH} alt="ETH" className="onChain" />
                        </div>
                        <div className="">
                            <h2>USDC</h2>
                            on Ethereum
                        </div>
                    </div>
                </div>
                <div className="poolboxBottom">
                    <div className="row">
                        <div className="col-6">
                            <h4>Total liquidity (USDC)</h4>
                            <h3>238.9</h3>
                        </div>
                        <div className="col-6">
                            <h4>APY (%)</h4>
                            <h3>0.6%</h3>
                        </div>
                        <div className="addDeposit">
                            <a href='./pool/your-liquidity' className="addDepositBtn" onClick={handleAddPollClick}>+ Add deposit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* {isYourLiquidityVisible && <Yourliquidity />} */}
        <div className="mobileDeposite"><button type="button" className="depositeBtn "> Deposit </button></div>
        </>
     );
}

export default PoolMobileData;