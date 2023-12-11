import React, { useState } from 'react';

import Success from '../../../assets/img/CheckGreen.svg';
import Copy from '../../../assets/img/copy.svg'
import Clock from '../../../assets/img/Clock.svg'
import Eth from '../../../assets/img/coin/eth.svg'
import Op from '../../../assets/img/coin/op.svg'
import Target from '../../../assets/img/target.svg';

function TransactionDetailsLeft() {

    const [isCopied, setIsCopied] = useState(false);
  
    const handleCopyClick = () => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    };

    const [isCopied2, setIsCopied2] = useState(false);

    const handleCopyClick2 = () => {
        setIsCopied2(true);
        setTimeout(() => {
          setIsCopied2(false);
        }, 2000);
      };
  
    return ( 
        <div className="transactionDetailsBox">
            <ul className="transactionDetailsList">
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        Tnx type
                    </div>
                    <div className="transactionDetailsListRight">
                        <span className="transfer">Transfer</span>
                    </div>
                </li>
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        Status
                    </div>
                    <div className="transactionDetailsListRight">
                        <span className="success"><img src={Success} alt="Success" /> Success</span>
                    </div>
                </li>
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        From
                    </div>
                    <div className="transactionDetailsListRight">
                        <div className="chainAddress">
                            <img src={Eth} alt="Eth" />
                            <div className="chainLink">0x1dcb8998c44968e9f8dbb0626e3f1e03e99b08c9</div>
                        </div>
                        <a href="#" className="exportLink">
                            <img src={Target} alt="Target" />
                        </a>
                        <button className='copyLink' onClick={handleCopyClick}>
                            {isCopied && <span className="copiedAlert">Copied!</span>}
                            <span className="copyHover">Copy to clipboard</span>
                            <img src={Copy} alt="Copy" />
                        </button>
                    </div>
                </li>
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        To
                    </div>
                    <div className="transactionDetailsListRight">
                        <div className="chainAddress">
                            <img src={Op} alt="Op" />
                            <div className="chainLink">0x1dcb8998c44968e9f8dbb0626e3f1e03e99b08c9</div>
                        </div>
                        <a href="#" className="exportLink">
                            <img src={Target} alt="Target" />
                        </a>
                        <button className='copyLink' onClick={handleCopyClick2}>
                            {isCopied2 && <span className="copiedAlert">Copied!</span>}
                            <span className="copyHover">Copy to clipboard</span>
                            <img src={Copy} alt="Copy" />
                        </button>
                    </div>
                        
                </li>
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        Age
                    </div>
                    <div className="transactionDetailsListRight">
                        <span className="time">
                            <img src={Clock} alt="Clock" /> 13 secs ago
                        </span>
                    </div>
                </li>
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        Estimated time
                    </div>
                    <div className="transactionDetailsListRight">
                        0h 22m 10s
                    </div>
                </li>
            </ul>
        </div>
     );
}

export default TransactionDetailsLeft;