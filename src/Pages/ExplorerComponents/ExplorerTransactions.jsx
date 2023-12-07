import React from 'react';
import ExplorerTransactionsTitle from './ExplorerTransactions/ExplorerTransactionsTitle';
import ExplorerTransactionsTnx from './ExplorerTransactions/ExplorerTransactionsTnx';
import ExplorerTransactionsTo from './ExplorerTransactions/ExplorerTransactionsTo';
import ExplorerTransactionsFrom from './ExplorerTransactions/ExplorerTransactionsFrom';

function ExplorerTransactions() {
    return ( 
        <div className="explorerTransactions">
            <ExplorerTransactionsTitle/>
            <div className="transactionRight">
                <ExplorerTransactionsTnx/>
                <ExplorerTransactionsFrom/>
                <ExplorerTransactionsTo/>
            </div>
        </div>
     );
}

export default ExplorerTransactions;