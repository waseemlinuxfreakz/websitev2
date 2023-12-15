import React from 'react';

function PoolByToken() {
    return ( 
        <div className="PoolByToken">
            <div className="PoolByTokenname">By token</div>
            <div className="PoolByTokenDrop">
                <div className="PoolByTokenSelect">Show All</div>
                <ul className="poolByTokenList">
                    <li className="poolByTokenItem">
                        <span>Show All</span>
                    </li>
                </ul>
            </div>
        </div>
     );
}

export default PoolByToken;