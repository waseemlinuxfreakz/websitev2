import React, { useEffect, useState } from 'react';
import Refresh from '../../assets/img/Swap-gray.svg';
import { useAccount } from 'wagmi';
import { useAppSelector, useAppDispatch } from '../../hooks/storage';

function RefreshExchange() {

    // Global state
    const swap = useAppSelector((state) => state.swap);
    const dispatch = useAppDispatch();
    const { isConnected } = useAccount();

    // Local state
    const [fromToken, setFromToken] = useState(swap.fromToken);
    const [toToken, setToToken] = useState(swap.toToken);
    const [fromPrice, setFromPrice] = useState(swap.fromPrice);
    const [toPrice, setToPrice] = useState(swap.toPrice);
    const [price, setPrice] = useState(fromPrice / toPrice);

    useEffect(() => {

        if (swap.fromToken && swap.toToken) {
            setFromToken(swap.fromToken);
            setToToken(swap.toToken);
            setFromPrice(swap.fromPrice);
            setToPrice(swap.toPrice);
            if (swap.fromPrice && swap.toPrice) {
                setPrice(swap.fromPrice / swap.toPrice);
            } else {
                setPrice(0);
            }

        }

    }, [swap.fromPrice, swap.toPrice]);

    function formatPrice(value) {
        // Converts the number to a string
        let val = String(value);
        if (val.includes("e-")) {
            return value.toFixed(8);
        } else {
            // Splits the real number
            let [whole, fraction] = val.split('.')
            // Returns the number with 6 decimal points after period
            return `${whole}${fraction ? '.' : ''}${fraction ? fraction.slice(0, 6) : ''}`;
        }

    }

    function onSwapTokenPriceHandle() {
        const fromToken_ = fromToken;
        const toToken_ = toToken;
        setFromToken(toToken_);
        setToToken(fromToken_);

        const fromPrice_ = fromPrice;
        const toPrice_ = toPrice;
        setFromPrice(toPrice_);
        setToPrice(fromPrice_);
        setPrice(toPrice_ / fromPrice_);

    }

    return (
        <>
            {
                isConnected
                    ? (<div className="refreshWallet">
                        <div className="refreshLeft">
                            1 {fromToken} = {formatPrice(price)} {toToken}
                        </div>
                        <div className="refreshRight">
                            <button
                                className='refReshBtn'
                                onClick={onSwapTokenPriceHandle}
                            >
                                <img src={Refresh} alt="Refresh" />
                            </button>
                        </div>
                    </div>)
                    : ''
            }


        </>

    );
}

export default RefreshExchange;