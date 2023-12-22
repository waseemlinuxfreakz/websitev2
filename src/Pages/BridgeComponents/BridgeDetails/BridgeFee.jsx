import React from 'react';
import useBridgeFee from '../../../hooks/useBridgeFee';

export default function BridgeFee() {
    const { nativeCurrency, formattedFee } = useBridgeFee();
    return (
        <div className="detialItem">
            <div className="detialItemLeft">
                Bridging Fee
            </div>
            <div className="detialItemRight">
                {formattedFee && formattedFee.toFixed(6)} {nativeCurrency}
            </div>
        </div>
    )
}