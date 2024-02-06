import React, { useEffect, useState } from 'react';
// Hooks
import { useAccount } from 'wagmi';
import { useWeb3Modal } from '@web3modal/react';
import { useAppSelector, useAppDispatch } from '../../hooks/storage';
import useBridgeApproveERC20 from '../../hooks/useBridgeApproveERC20';
import useBridgeTransferEmmet from '../../hooks/useBridgeTransferEmmet';
import useBalance from '../../hooks/useBalance';
// Components
import ButtonSpinner from '../CommonComponents/Spinner/ButtonSpinner';
// Actions
import { setBridgeIsApproving, setBridgeAmount, setBridgeTempAmount } from '../../store/bridgeSlice';


function MainActionButton() {

    const dispatch = useAppDispatch();
    const bridge = useAppSelector((state) => state.bridge);
    const { coinBalance, fromBalance } = useBalance();

    const { isConnected } = useAccount();
    const { open } = useWeb3Modal();

    const [disabled, setDisabled] = useState(false);
    const [caption, setCaption] = useState('');
    const [showSpinner, setShowSpiner] = useState(false);
    const { approve, isApproveLoading } = useBridgeApproveERC20();
    const { estimation, isBurnReady, burnUSDC, retry, error } = useBridgeTransferEmmet();

    function isApproveRequired() {
        const needApproval = Number(bridge.amount) > (Number(bridge.allowance) / 10 ** Number(bridge.decimals));
        return needApproval;
    }

    useEffect(() => {

        if (isConnected) {

            if (coinBalance < estimation || (error && error =='Insufficient fee coverage.')) {
                setDisabled(true);
                setCaption('Insufficient balance to pay the fee');
            } else {

                console.log('isBurnReady', isBurnReady)

                if (!bridge.amount || Number(bridge.amount) <= 0) {
                    setDisabled(true);
                    setCaption('Enter Amount');
                    setShowSpiner(false);
                } else if(isApproveRequired()) {
                    setDisabled(false);
                    setCaption('Approve');
                    setShowSpiner(false);
                } else if (isBurnReady) {
                    setDisabled(false);
                    setCaption('Transfer');
                    setShowSpiner(false);
                } else {
                        setDisabled(true);
                        setCaption('Preparing transfer...');
                        setShowSpiner(true);
                        // Reestimate the Transfer
                        retry()
                        // dispatch(setBridgeTempAmount(bridge.amount));
                        // dispatch(setBridgeAmount(''));
                        // dispatch(setBridgeAmount(bridge.tempAmount));
                        // dispatch(setBridgeTempAmount(''));
                    }


                if (isApproveLoading) {
                    setDisabled(true);
                    setShowSpiner(true);
                }

                if (fromBalance < bridge.amount) {
                    setDisabled(true);
                    setShowSpiner(false);
                    setCaption('Amount exceeds the token balance');
                }

            }



        } else {
            setDisabled(false);
            setCaption('Conect wallet')
        }

    }, [isConnected, bridge.amount, isApproveLoading, isBurnReady]);



    const onClickSelectAction = () => {
        if (!isConnected) {
            open();
        } else {
            if (isApproveRequired()) {
                if (approve) {
                    try {
                        approve();
                        dispatch(setBridgeIsApproving(true));
                    } catch (error) {
                        console.warn(error.message)
                        dispatch(setBridgeIsApproving(false));
                    }

                }
            } else {
                if (isBurnReady) {
                    burnUSDC();
                } else {
                    try {
                        burnUSDC();
                    } catch (error) {
                        console.error(error)
                    }
                }

            }
        }

    }

    return (
        <div className="connectBtn">
            <button
                className='MainActionButton'
                disabled={disabled}
                onClick={onClickSelectAction}
            >
                {showSpinner && <ButtonSpinner />}
                {caption}

            </button>
        </div>
    );
}

export default MainActionButton;