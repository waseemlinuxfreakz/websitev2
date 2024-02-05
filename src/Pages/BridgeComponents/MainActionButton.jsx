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
import { setBridgeIsApproving, setBridgeAmount } from '../../store/bridgeSlice';
import { sleep } from '../../utils';

function MainActionButton() {

    const dispatch = useAppDispatch();
    const bridge = useAppSelector((state) => state.bridge);
    const { coinBalance, fromBalance } = useBalance();

    const { isConnected, address } = useAccount();
    const { open } = useWeb3Modal();

    const [disabled, setDisabled] = useState(false);
    const [caption, setCaption] = useState('');

    const { approve } = useBridgeApproveERC20();
    const { estimation, isBurnReady, burnUSDC } = useBridgeTransferEmmet();

    function isApproveRequired() {
        const needApproval = Number(bridge.amount) > (Number(bridge.allowance) / 10 ** Number(bridge.decimals));
        return needApproval;
    }

    console.log("coinBalance", coinBalance, 'estimation', estimation)

    useEffect(() => {

        if (isConnected) {

            if (coinBalance < estimation) {
                setDisabled(true);
                setCaption('Insufficient balance to pay the fee');
            } else {

                if (isApproveRequired()) {
                    setDisabled(false);
                    setCaption('Approve');
                } else {
                    if(isBurnReady){
                        setDisabled(false);
                        setCaption('Transfer');
                    }else{
                        setDisabled(true);
                        setCaption('Getting ready to transfer...');
                        // Reestimate the Transfer
                        const oldAmount = bridge.amount;
                        dispatch(setBridgeAmount(0));
                        sleep(1000);
                        dispatch(setBridgeAmount(oldAmount));
                    }
                    
                }

                if (!bridge.amount || Number(bridge.amount) <= 0) {
                    setDisabled(true);
                    setCaption('Enter Amount');
                }

                if (bridge.isApproving) {
                    setDisabled(true);
                }

                if (fromBalance < bridge.amount) {
                    setDisabled(true);
                    setCaption('Amount exceeds the token balance');
                }

            }



        } else {
            setDisabled(false);
            setCaption('Conect wallet')
        }

    }, [isConnected, bridge.amount, bridge.isApproving]);



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
                {bridge.isApproving
                    ? (<>
                        <ButtonSpinner />
                        <span>Approving...</span>
                    </>)
                    : !isBurnReady 
                    ? (<>
                        <ButtonSpinner />
                        <span>Preparing to transfer...</span>
                    </>)
                    : caption
                }

            </button>
        </div>
    );
}

export default MainActionButton;