import React from 'react';
import ChainSelectorDropdown from '../../HomeComponents/ChainSelectorDropdown/ChainSelectorDropdown';

function ExplorerTransactionsFrom() {
    return ( 
        <div className="ExplorerTransactionsFilter tnxTypeFilter">
            <div className="filterName">From</div>
            <div className="filterDropdown">
                <ChainSelectorDropdown/>
            </div>
        </div>
     );
}

export default ExplorerTransactionsFrom ;