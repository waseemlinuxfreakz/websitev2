import React from 'react';

function TransactionDetailsRight() {
    return ( 
        <div className="transactionDetailsBox">
            <ul className="transactionDetailsList">
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        Sent amount
                    </div>
                    <div className="transactionDetailsListRight">
                        1 ETH
                    </div>
                </li>
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        Received amount
                    </div>
                    <div className="transactionDetailsListRight">
                        0.98 ETH
                    </div>
                </li>
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        Bridge Fee
                    </div>
                    <div className="transactionDetailsListRight">
                        <div className="bridgeFee">19 EMMET <span>= $0.0198</span></div>
                    </div>
                </li>
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        Origin Fee
                    </div>
                    <div className="transactionDetailsListRight">
                        0 ETH
                    </div>
                </li>
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        Destination Fee
                    </div>
                    <div className="transactionDetailsListRight">
                        0.05 OPT
                    </div>
                </li>
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        Value
                    </div>
                    <div className="transactionDetailsListRight">
                        $183
                    </div>
                </li>
            </ul>
        </div>
     );
}

export default TransactionDetailsRight;