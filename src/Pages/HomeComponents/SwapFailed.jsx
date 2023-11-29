import React, { useState } from 'react';
import Close from '../../assets/img/close.svg';
import Failed from '../../assets/img/failed.svg';

function SwapFailed() {
    const [isModalVisible, setModalVisibility] = useState(true);

    const handleCloseModal = () => {
        setModalVisibility(false);
    };

    return isModalVisible ? (
        <div className="swapSuccessModal">
            <div className="swapSuccessModalInner errorModal">
                <div className="closeSuccess" onClick={handleCloseModal}>
                    <img src={Close} alt="Close" />
                </div>
                <img src={Failed} alt="Failed" className="successIcon" />
                <h2>Swap Failed</h2>
                <p className='text-center'>Unknown error. <br /> Try increasing your slippage tolerance.</p>
                <div className="successBottomBtns">
                    <a href="#" className='backTo yellowBtn'>Back to swap</a>
                </div>
            </div>
        </div>
    ) : null;
}

export default SwapFailed;
