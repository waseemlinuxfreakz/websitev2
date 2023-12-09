import React from 'react';

import Ethereum from '../../assets/img/Ethereum.svg';
import ETH from '../../assets/img/coin/eth.svg';
import Emmet from '../../assets/img/coin/emmet.svg';
import Scroll from '../../assets/img/coin/scoll.svg';
import Op from '../../assets/img/coin/op.svg';
import USDC from '../../assets/img/coin/usdc.svg';
import DIA from '../../assets/img/coin/dai.svg';
import Success from '../../assets/img/Success-Flower.svg';


function TransactionProgressSuccess() {
    return ( 
        // Add this class for Success Message "."
        <div className="progressBox progressSuccess">
            <div className="fromProgress">
                <img src={Op} alt="Op" />
            </div>
                <div className="progressDetails">
                    <div className='progressTitle'>
                        <p className="successText">
                            <img src={Success} alt="Success" />
                            Success transaction!
                        </p>
                    </div>
                    <h5>00h 00m 05s</h5>
                </div>
            <div className="toProgress">
                <img src={ETH} alt="ETH" />
            </div>
        </div>
     );
}

export default TransactionProgressSuccess;