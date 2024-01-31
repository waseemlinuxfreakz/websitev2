import React, { useEffect, useState } from 'react';
// Hooks
import { useAccount } from 'wagmi';
import { useWeb3Modal } from '@web3modal/react';
import { useAppSelector, useAppDispatch } from '../../hooks/storage';
import useBridgeApproveERC20 from '../../hooks/useBridgeApproveERC20';
import useBridgeTransferEmmet from '../../hooks/useBridgeTransferEmmet';
// Components
import ButtonSpinner from '../CommonComponents/Spinner/ButtonSpinner';
// Actions
import { setBridgeIsApproving } from '../../store/bridgeSlice';

function MainActionButton() {

    const dispatch = useAppDispatch();
    const bridge = useAppSelector((state) => state.bridge);

    const { isConnected } = useAccount();
    const { open } = useWeb3Modal();

    const [disabled, setDisabled] = useState(false);
    const [caption, setCaption] = useState('');

    const { approve } = useBridgeApproveERC20();
    const { isBurnReady, burnUSDC } = useBridgeTransferEmmet();

    function isApproveRequired() {
        const needApproval = Number(bridge.amount) > (Number(bridge.allowance) / 10 ** Number(bridge.decimals));
        return needApproval;
    }

    useEffect(() => {

        if (isConnected) {

            if (isApproveRequired()) {
                setDisabled(false);
                setCaption('Approve');
            } else {
                setDisabled(false);
                setCaption('Transfer');
            }

            if (!bridge.amount || Number(bridge.amount) <= 0) {
                setDisabled(true);
                setCaption('Enter Amount');
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
                }else{
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
                    : caption
                }

            </button>
        </div>
    );
}

export default MainActionButton;