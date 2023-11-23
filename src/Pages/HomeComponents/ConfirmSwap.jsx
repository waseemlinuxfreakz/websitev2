import React from 'react';
import ConfirmSwapIcon from '../../assets/img/ConfirmSwap.svg';



function ConfirmSwap.jsx() {
    return ( 
        <div className="swapSuccessModal confirmSwap">
            <div className="closeSuccess"><img src={Close} alt="Close" /></div>
            <img src={ConfirmSwapIcon} alt="Success" className="successIcon" />
            <h2>Swap Successful</h2>
            <div className="successTransfer">
                <div className="tFrom"><span>0.5</span> ETH</div>
                <img src={RightGreen} alt="RightGreen" className="greenRight" />
                <div className="tTo"><span>1025</span> USDT</div>
            </div>
            <p className="inprocess">Proceed in your wallet</p>
        </div>
     );
}

export default ConfirmSwap.jsx;