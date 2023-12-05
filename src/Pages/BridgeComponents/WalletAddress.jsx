import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setReceiver } from '../../store/swapSlice';
import { useAccount } from 'wagmi';

function WalletAddress() {

    const dispatch = useDispatch();
    const { address, isConnected } = useAccount();

    const [destAddress, setDestAddress] = useState(isConnected 
        ? `${address.slice(0, 15)}...${address.slice(-15,)}`
        : '');

    function isEvmAddress(address) {
        // Regular expression to match the EVM address format
        // Expected length 42 chars including `0x`
        // Can only contain hex chars 0-9 | a-f | A-F
        const evmAddressRegex = /^0x[a-fA-F0-9]{40}$/;

        // Test the address against the regex and return the result
        return evmAddressRegex.test(address);
    }

    function onChangeClickHandle(e) {
        e.preventDefault();
        const inputValue = e.target.value;
        const pattern = /^[0x]{0,2}[0-9a-fA-F]{0,40}$/;

        if (pattern.test(inputValue)) {
            setDestAddress(inputValue);
            if (isEvmAddress(destAddress)) {
                console.log("isEVMAddress")
                dispatch(setReceiver(destAddress));
            }
        } else {
            onChangeClick();
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