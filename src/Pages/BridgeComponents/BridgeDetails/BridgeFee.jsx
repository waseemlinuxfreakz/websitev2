import React from 'react';
import useBridgeFee from '../../../hooks/useBridgeFee';

export default function BridgeFee() {
    const { nativeCurrency, formattedFee } = useBridgeFee();
    return (
        <div className="detialItem">
            <div className="detialItemLeft">
                Bridge Fee
            </div>
            <div className="detialItemRight">
                {formattedFee} {nativeCurrency}
            </div>
        </div>
    )
}