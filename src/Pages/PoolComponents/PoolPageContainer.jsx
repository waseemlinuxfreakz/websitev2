import React from 'react';
import './YourPool/YourPool.css';
import YourPool from './YourPool/YourPool';
import PoolTableArea from './PoolTable/PoolTableArea';

function PoolPageContainer() {
    return ( 
        <div className="poolpageContainer">
            <YourPool/>
            <PoolTableArea/>
        </div>
     );
}

export default PoolPageContainer;