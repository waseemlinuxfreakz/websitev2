import React from 'react';
import useBridgeFee from '../../../hooks/useBridgeFee';
import { useAppSelector } from '../../../hooks/storage'

export default function BridgeFee() {
    const bridge = useAppSelector((state) => state.bridge);
    const { nativeCurrency, formattedFee } = useBridgeFee();
    return (<>
        <div className="detialItem">
            <div className="detialItemLeft">
            Protocol Fee
            </div>
            <div className="detialItemRight">
                {Number(bridge.amount - bridge.receive).toFixed(2)} {bridge.fromToken}
            </div>
        </div>
        <div className="detialItem">
            <div className="detialItemLeft">
                Destination Gas (Est.)
            </div>
            <div className="detialItemRight">
                {formattedFee && formattedFee.toFixed(8)} {nativeCurrency}
            </div>
        </div>
    </>

    )
}