import React from 'react';
import PoolTableTitle from './PoolTableTitle';
import PoolByToken from './PoolByTokken';
import PoolByChain from './PoolByChain';

function PoolTableTop() {
    return ( 
        <div className="poolTableTop">
            <div className="poolTableLeft">
                <PoolTableTitle/>
            </div>
            <div className="poolTableRight">
                <PoolByToken/>
                <PoolByChain/>
            </div>
        </div>
     );
}

export default PoolTableTop;