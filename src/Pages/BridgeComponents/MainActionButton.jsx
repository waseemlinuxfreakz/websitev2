import React, { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { useWeb3Modal } from '@web3modal/react';
import { useAppSelector  } from '../../hooks/storage';
import useBridgeAllowance from '../../hooks/useAllowance';
import useBridgeApproveERC20 from '../../hooks/useBridgeApproveERC20';

function MainActionButton() {

    const bridge = useAppSelector((state) => state.bridge);

    const { isConnected } = useAccount();
    const { open } = useWeb3Modal();

    const [disabled, setDisabled] = useState(false);
    const [caption, setCaption] = useState('');

    const {approve, isApproveSuccess, isApproveLoading} = useBridgeApproveERC20();

    // has enough allowance?
    const { isApprovalRequired } = useBridgeAllowance(
        'goerli',
        "USDC",
        "0x738b2B2153d78Fc8E690b160a6fC919B2C88b6A4",
        "0x750B52c82596C7b6489C207b87adcf56Fe4a3ABe"
    );

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
                // Call transfer here
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