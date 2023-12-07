import React from 'react';
import ExplorerHeaderSearch from '../../HeaderFooterSidebar/ExplorerHeaderSearch';
import ExplorerTopGridRow from './ExplorerTopGridRow';
import ExplorerTransactions from './ExplorerTransactions';
import './ExplorerTransactions/ExplorerTransactions.css';
import './ExplorerTopGrid/ExplorerTopGrid.css';


function ExplorerPageContainer() {
    return ( 
        <div className="">
             <ExplorerTopGridRow/>
             <ExplorerTransactions/>
        </div>
     );
}

export default ExplorerPageContainer;