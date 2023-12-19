import React from 'react';
import YourPoolTitle from './YourPoolTitle';
import PoolBox1 from './PoolBox1';
import PoolBox2 from './PoolBox2';
import PoolBox3 from './PoolBox3';
import PoolBox4 from './PoolBox4';

function YourPool() {
    return ( 
        <div className="yourPool">
            <YourPoolTitle/>
            <div className="pollRow row">
                <div className="col-lg-3">
                    <PoolBox1/>
                </div>
                <div className="col-lg-3">
                    <PoolBox2/>
                </div>
                <div className="col-lg-3">
                    <PoolBox3/>
                </div>
                <div className="col-lg-3">
                    <PoolBox4/>
                </div>
                <div className="col-lg-3">
                    <PoolBox1/>
                </div>
                <div className="col-lg-3">
                    <PoolBox2/>
                </div>
                <div className="col-lg-3">
                    <div className="poolBox"></div>
                </div>
                <div className="col-lg-3">
                    <div className="poolBox"></div>
                </div>
            </div>
        </div>
     );
}

export default YourPool;