import React, { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { useWeb3Modal } from '@web3modal/react';
import { useAppSelector, useAppDispatch } from '../../hooks/storage';
import useActionButtonDiabled from '../../hooks/useActionButtonDisabled';

function MainActionButton() {

    const bridge = useAppSelector((state) => state.bridge);
    const dispatch = useAppDispatch();

    const { isConnected } = useAccount();
    const { open } = useWeb3Modal();

    const disabled = useActionButtonDiabled("bridge");

    // has enough allowance?

    // can transfer?

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