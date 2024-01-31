import React from 'react';
import useBridgeFee from '../../../hooks/useBridgeFee';
import { useAppSelector } from '../../../hooks/storage'

export default function BridgeFee() {
    const bridge = useAppSelector((state) => state.bridge);
    const {nativeCurrency, formattedFee } = useBridgeFee();
    return (
        <div className="detialItem">
            <div className="detialItemLeft">
                Bridging Fee
            </div>
            <div className="detialItemRight">
                {formattedFee} {nativeCurrency}
            </div>
        </div>
    )
}