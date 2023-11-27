import React, { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { useWeb3Modal } from '@web3modal/react';

function MainActionButton() {

    const [disabled, setDisabled] = useState(false);

    const { isConnected } = useAccount();
    const { open } = useWeb3Modal();

    useEffect(() => {

        if (isConnected) {
            setDisabled(true);
        }

        if(!isConnected){
            setDisabled(false);
        }

    }, [isConnected]);

    const onClickSelectAction = () => {
        if(!isConnected){
            open();
        }
    }

    return (
        <div className="connectBtn">
            <button
                className='MainActionButton'
                disabled={disabled}
                onClick={onClickSelectAction}
            >
                {disabled
                    ? "Enter Amount"
                    : "Connect wallet"}

            </button>
        </div>
    );
}

export default MainActionButton;