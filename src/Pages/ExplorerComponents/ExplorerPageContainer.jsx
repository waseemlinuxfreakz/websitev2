import React from 'react';
import ExplorerHeaderSearch from '../../HeaderFooterSidebar/ExplorerHeaderSearch';
import ExplorerTopGridRow from './ExplorerTopGridRow';
import ExplorerTransactions from './ExplorerTransactions';
import './ExplorerTransactions/ExplorerTransactions.css';
import './ExplorerTopGrid/ExplorerTopGrid.css';
import ExplorerTransactionsTable from './ExplorerTransactionsTable/ExplorerTransactionsTable';
import TransactionDetails from './TransactionDetails/TransactionDetails';
import ExplorerTransactionsSearch from './ExplorerTransactionsSearch';


function ExplorerPageContainer() {
    return ( 
        <div className="">
             <ExplorerTopGridRow/>
             {/* <ExplorerTransactionsSearch/> */}
             <ExplorerTransactions/>
             <ExplorerTransactionsTable/>
             <TransactionDetails/>
        </div>
     );
}

export default ExplorerPageContainer;