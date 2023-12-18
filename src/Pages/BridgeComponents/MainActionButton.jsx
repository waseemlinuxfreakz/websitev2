import React, { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { useWeb3Modal } from '@web3modal/react';
import { useAppSelector  } from '../../hooks/storage';
import useBridgeAllowance from '../../hooks/useAllowance';
import useBridgeApproveERC20 from '../../hooks/useBridgeApproveERC20';
import useBridgeTransfer from '../../hooks/useBridgeTransfer';

function MainActionButton() {

    const bridge = useAppSelector((state) => state.bridge);

    const { isConnected } = useAccount();
    const { open } = useWeb3Modal();

    const [disabled, setDisabled] = useState(false);
    const [caption, setCaption] = useState('');

    const {approve, isApproveSuccess, isApproveLoading} = useBridgeApproveERC20();
    const {transfer} = useBridgeTransfer();

    // has enough allowance?
    const { isApprovalRequired } = useBridgeAllowance();

    function isApproveRequired() {
        return Number(bridge.amount) > (Number(bridge.allowance) / 10 ** Number(bridge.decimals));
    }

    useEffect(() => {

        if (isConnected) {

            if (isApproveRequired()) {
                setDisabled(false);
                setCaption('Approve');
            }else{
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

    }, [isConnected, bridge.amount, isApprovalRequired]);



    const onClickSelectAction = () => {
        if (!isConnected) {
            open();
        }else{
            if(isApproveRequired()){
                approve();
            }else{
                if(transfer){
                    transfer();
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
                {caption}

            </button>
        </div>
    );
}

export default MainActionButton;