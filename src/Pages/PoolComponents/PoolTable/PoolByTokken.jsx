import React from 'react';
import ChainSelectorDropdown from '../../HomeComponents/ChainSelectorDropdown/ChainSelectorDropdown';

function PoolByToken() {
    return ( 
        <div className="ExplorerTransactionsFilter buyChainFilter">
            <div className="filterName">By token</div>
            <div className="filterDropdown">
                <ChainSelectorDropdown/>
            </div>
        </div>
     );
}

export default PoolByToken;