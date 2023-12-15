import React from 'react';

function YourPoolTitle() {
    return ( 
        <div className="yourPoolTitle">
            <div className="poolTitleLeft">
                <h5>Your pool</h5>
                <p>Total fee earnings: $330,843,482.47</p>
            </div>
            <div className="poolTitlerRight">
                <button className="addLiquidity">Add liquidity</button>
            </div>
        </div>
     );
}

export default YourPoolTitle;