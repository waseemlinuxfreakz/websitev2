import React, { useState } from 'react';

import Success from '../../../assets/img/CheckGreen.svg';
import Copy from '../../../assets/img/copy.svg'
import Clock from '../../../assets/img/Clock.svg'
import Eth from '../../../assets/img/coin/eth.svg'
import Op from '../../../assets/img/coin/op.svg'
import Target from '../../../assets/img/target.svg';

import { useAppSelector } from '../../../hooks/storage';
import { getDomainToChainName, getChainSymbolFromName, getTimeLength } from '../../../utils';
import useElapsedTime from '../../../hooks/useElapsedTime';

function TransactionDetailsLeft() {

    const explorer = useAppSelector(store => store.explorer);

    const elapsedTime = useElapsedTime(explorer.bridgeTransaction.start);

    const txLength = getTimeLength(
        explorer.bridgeTransaction.start,
        explorer.bridgeTransaction.finished
    )

    const [isCopied, setIsCopied] = useState(false);
    const [isCopied2, setIsCopied2] = useState(false);

    const handleCopyClick = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

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
                        <span className="transfer">
                            {explorer.bridgeTransaction.txType}
                        </span>
                    </div>
                </li>
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        Status
                    </div>
                    <div className="transactionDetailsListRight">
                        <span
                            className="success"
                        >
                            <img
                                src={Success}
                                alt="Success"
                            />
                            {' '}{explorer.bridgeTransaction.status}
                        </span>
                    </div>
                </li>
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        From
                    </div>
                    <div className="transactionDetailsListRight">
                        <div className="chainAddress">
                            <img src={Eth} alt="Eth" />
                            <div className="chainLink">
                                {explorer.bridgeTransaction.burnHash
                                    ? `${explorer.bridgeTransaction.burnHash.slice(0, 6)}...${explorer.bridgeTransaction.burnHash.slice(-10)}`
                                    : ''
                                }
                            </div>
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
                            <div className="chainLink">
                                {explorer.bridgeTransaction.claimHash
                                    ? `${explorer.bridgeTransaction.claimHash.slice(0, 6)}...${explorer.bridgeTransaction.claimHash.slice(-10)}`
                                    : ''
                                }
                            </div>
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
                            <img src={Clock} alt="Clock" />
                            {elapsedTime.days ? `${elapsedTime.days} days ` : ''}
                            {elapsedTime.hours ? `${elapsedTime.hours} hr ` : ''}
                            {elapsedTime.minutes ? `${elapsedTime.minutes} min ` : ''}
                            {elapsedTime.seconds ? `${elapsedTime.seconds} sec ` : ''}
                            {elapsedTime.days || elapsedTime.hours || elapsedTime.minutes || elapsedTime.seconds
                            ? ' ago'
                            : ''
                            }
                        </span>
                    </div>
                </li>
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        Transaction length
                    </div>
                    <div className="transactionDetailsListRight">
                        {txLength.days ? `${txLength.days} days ` : ''}
                        {txLength.hours ? `${txLength.hours} hr ` : ''}
                        {txLength.minutes ? `${txLength.minutes} min ` : ''}
                        {txLength.seconds ? `${txLength.seconds} sec ` : ''}
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default TransactionDetailsLeft;