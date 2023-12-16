import React from 'react';

import ChainSelectorDropdown from '../../HomeComponents/ChainSelectorDropdown/ChainSelectorDropdown';

function PoolByChain() {
    return ( 
        <div className="ExplorerTransactionsFilter buyChainFilter">
            <div className="filterName">By chain</div>
            <div className="filterDropdown">
                <ChainSelectorDropdown/>
            </div>
        </div>
     );
}

export default PoolByChain;