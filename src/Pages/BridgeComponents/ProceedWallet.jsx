import React from 'react';
import Info from '../../assets/img/info-white.svg';

function ProceedWallet() {
    return ( 
        <div className="proceed_Wallet">
            <div className="proceedWalletText"><img src={Info} alt="Proceed_wallert" /> Please proceed in your wallet to approve token ammount</div>
        </div> 
    );
}

export default ProceedWallet;