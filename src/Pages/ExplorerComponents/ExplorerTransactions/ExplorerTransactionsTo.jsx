import React from 'react';

import ChainSelectorDropdown from '../../HomeComponents/ChainSelectorDropdown/ChainSelectorDropdown';

function ExplorerTransactionsTo() {
    return ( 
        <div className="ExplorerTransactionsFilter toTypeFilter">
            <div className="filterName">To</div>
            <div className="filterDropdown">
                <ChainSelectorDropdown
                    parent="explorer"
                    direction="to"
                />
            </div>
        </div>
     );
}

export default ExplorerTransactionsTo;