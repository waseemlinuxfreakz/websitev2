import React from 'react';
import TransactionDetailsBreadcrumb from './TransactionDetailsBreadcrumb';
import TransactionHash from './TransactionHash';
import TransactionDetailsArea from './TransactionDetailsBox';


function TransactionDetails() {
    return ( 
        <div className="TransactionDetailsArea">
            <TransactionDetailsBreadcrumb/>
            <TransactionHash/>
            <TransactionDetailsArea/>
        </div>
     );
}

export default TransactionDetails;