import React from 'react';

import USDT from '../../../assets/img/coin/usdc.svg';
import ETH from '../../../assets/img/coin/eth.svg';
import Target from '../../../assets/img/target.svg';


function PoolBox1() {
    return ( 
        <div className="poolBox">
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
                <div className="poolboxTopRight">
                    <a href="#" className='tragetLink'><img src={Target} alt="Target" /></a>
                    <p><b>APY</b> 0.38%</p>
                </div>
            </div>
            <div className="poolboxBottom">
                <div className="row">
                    <div className="col-6">
                        <h4>Deposit (USDC)</h4>
                        <h3>238.9</h3>
                    </div>
                    <div className="col-6">
                        <h4>Fees ($)</h4>
                        <h3>$654</h3>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default PoolBox1;