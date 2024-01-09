import React from 'react';
import ChainSelectorDropdown from '../../HomeComponents/ChainSelectorDropdown/ChainSelectorDropdown';
import TokenSelectionDropdown from '../../HomeComponents/TokenSelectors/TokenSelectionDropdown';

function ExplorerToChainSelectDropdown() {
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

export default ExplorerToChainSelectDropdown;