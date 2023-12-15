import React from 'react';

function PoolByChain() {
    return ( 
        <div className="PoolByChain">
            <div className="PoolByChainname">By chain</div>
            <div className="PoolByChainDrop">
                <div className="PoolByChainSelect">Show All</div>
                <ul className="PoolByChainList">
                    <li className="PoolByChainItem">
                        <span>Show All</span>
                    </li>
                </ul>
            </div>
        </div>
     );
}

export default PoolByChain;