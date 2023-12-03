import React from 'react';

function WalletAddress() {
    return ( 
        <div className="wallet_Address">
            <div className="inputAddress Disenable">
                <input type="text" value="Address 0x4724ECaCAcbd4...9fd5" />
            </div>
            <button className="changeAddress">Change</button>
        </div>
     );
}

export default WalletAddress;