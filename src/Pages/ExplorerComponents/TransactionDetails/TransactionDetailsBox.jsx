import React from 'react';
import TransactionDetailsLeft from './TransactionDetailsLeft';
import TransactionDetailsRight from './TransactionDetailsRight';



function TransactionDetailsArea() {
    return ( 
        <div className="transactionDetailsArea">
            <div className="row">
                <div className="col-lg-6">
                    <TransactionDetailsLeft/>
                </div>
                <div className="col-lg-6">
                    <TransactionDetailsRight/>
                </div>
            </div>
        </div>
     );
}

export default TransactionDetailsArea;