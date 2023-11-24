import React from 'react';
import Close from '../../assets/img/close.svg';
import Failed from '../../assets/img/failed.svg';


function SwapFailed() {
    return (
        <div className="swapSuccessModal">
            <div className="swapSuccessModalInner errorModal">
                <div className="closeSuccess"><img src={Close} alt="Close" /></div>
                <img src={Failed} alt="Success" className="successIcon" />
                <h2>Swap Failed</h2>
                <p className='text-center'>Unknown error. <br /> Try increrasing your slippage tolerance.</p>
                <div className="successBottomBtns">
                    <a href="#" className='backTo yellowBtn'>Back to swap</a>
                </div>
            </div>
        </div>
    );
}

export default SwapFailed;