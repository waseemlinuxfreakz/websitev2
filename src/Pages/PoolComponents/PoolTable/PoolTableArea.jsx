import React from 'react';
import PoolTableTop from './PoolTableTop';
import PoolTable from './PooltableData';

function PoolTableArea() {
    return ( 
        <div className="poolTableArea">
            <PoolTableTop/>
            <PoolTable/>
        </div>
     );
}

export default PoolTableArea;