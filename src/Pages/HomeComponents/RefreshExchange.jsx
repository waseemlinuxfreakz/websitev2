import React from 'react';
import Refresh from '../../assets/img/Swap-gray.svg';

function RefreshExchange() {
    return ( 
        <div className="refreshWallet">
            <div className="refreshLet">
                1 ETH = 1964.86
            </div>
            <div className="refreshRight">
                <button className='refReshBtn'><img src={Refresh} alt="Refresh" /></button>
            </div>
        </div>
     );
}

export default RefreshExchange;