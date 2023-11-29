import React, { useState } from 'react';
import ConfirmSwapIcon from '../../assets/img/ConfirmSwap.svg';
import Close from '../../assets/img/close.svg';
import RightGreen from '../../assets/img/right-green.svg';

function SwapConfirm() {
    const [isModalVisible, setModalVisibility] = useState(true);

    const handleCloseModal = () => {
        setModalVisibility(false);
    };

    return isModalVisible ? (
        <div className="swapSuccessModal">
            <div className="swapSuccessModalInner confirmSwap">
                <div className="closeSuccess" onClick={handleCloseModal}>
                    <img src={Close} alt="Close" />
                </div>
                <img src={ConfirmSwapIcon} alt="Success" className="successIcon" />
                <h2>Swap Successful</h2>
                <div className="successTransfer">
                    <div className="tFrom"><span>0.5</span> ETH</div>
                    <img src={RightGreen} alt="RightGreen" className="greenRight" />
                    <div className="tTo"><span>1025</span> USDT</div>
                </div>
                <br />
                <p className="inprocess text-center">Proceed in your wallet</p>
                <br />
            </div>
        </div>
    ) : null;
}

export default SwapConfirm;
