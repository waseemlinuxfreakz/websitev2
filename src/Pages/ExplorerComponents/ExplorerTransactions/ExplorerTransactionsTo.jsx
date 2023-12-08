import React from 'react';


function ExplorerTransactionsTo() {
    return ( 
        <div className="ExplorerTransactionsFilter tnxTypeFilter">
            <div className="filterName">To</div>
            <div className="filterDropdown">
                <div className="filterDropName">
                    <div className="filterDropSelect">All chains</div>
                </div>
                <ul className="filterDropList">
                    <li>
                        <div className="filterDropSelect">
                            All chains
                        </div>
                    </li>
                    <li>
                        <div className="filterDropSelect">
                            All 1
                        </div>
                    </li>
                    <li>
                        <div className="filterDropSelect">
                            All 2
                        </div>
                    </li>
                    <li>
                        <div className="filterDropSelect">
                            All 3
                        </div>
                    </li>
                </ul>
            </div>
        </div>
     );
}

export default ExplorerTransactionsTo;