import React, { useEffect, useState } from 'react';
import { setReceiver } from '../../store/bridgeSlice';
import { useAccount } from 'wagmi';
import { isEvmAddress} from '../../verifiers';
import { useAppSelector, useAppDispatch } from '../../hooks/storage';

function WalletAddress() {

    const dispatch = useAppDispatch();
    const bridge = useAppSelector(state => state.bridge);
    const { address } = useAccount();

    function truncate(address) {
        return address
        ? `${address.slice(0, 14)}...${address.slice(-14,)}`
        : '';
    }
    const [destAddress, setDestAddress] = useState(truncate(address));

    useEffect(() => {

    },[]);

    function onChangeClickHandle(e) {
        e.preventDefault();
        const inputValue = e.target.value;
        const pattern = /^[0x]{0,2}[0-9a-fA-F]{0,40}$/;

        if (pattern.test(inputValue)) {
            setDestAddress(inputValue);
            if (isEvmAddress(destAddress)) {
                setDestAddress(truncate(inputValue));
                dispatch(setReceiver(destAddress));
            }
        } else {
            setDestAddress(destAddress);
            dispatch(setReceiver(''));
        }
    }

    function onChangeClick() {
        setDestAddress('');
        dispatch(setReceiver(''));
    }

    return (
        <div className="wallet_Address">
            <div className="inputAddress Disenable">
                <input
                    onChange={onChangeClickHandle}
                    value={destAddress}
                    type="text"
                    placeholder="Destination address"
                    style={{"textAlign":"center"}}
                />
            </div>
            <button
                className="changeAddress"
                onChange={onChangeClick}
            >
                Change
            </button>
        </div>
    );
}

export default WalletAddress;