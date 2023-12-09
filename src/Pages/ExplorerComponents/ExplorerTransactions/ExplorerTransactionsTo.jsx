import React from 'react';

import ChainSelectorDropdown from '../../HomeComponents/ChainSelectorDropdown/ChainSelectorDropdown';

function ExplorerTransactionsTo() {
    return ( 
        <div className="ExplorerTransactionsFilter tnxTypeFilter">
            <div className="filterName">To</div>
            <div className="filterDropdown">
                <ChainSelectorDropdown/>
            </div>
        </div>
     );
}

export default ExplorerTransactionsTo;