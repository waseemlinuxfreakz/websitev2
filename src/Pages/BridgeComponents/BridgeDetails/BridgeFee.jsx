import React from "react";
import useBridgeFee from "../../../hooks/useBridgeFee";
import { useAppSelector } from "../../../hooks/storage";

export default function BridgeFee() {
  const bridge = useAppSelector((state) => state.bridge);
  const { nativeCurrency, formattedFee, protocolFeeInUSD } = useBridgeFee();
  return (
    <>
      <div className="detialItem">
        <div className="detialItemLeft">Protocol Fee</div>
        <div className="detialItemRight">${protocolFeeInUSD}</div>
      </div>
      <div className="detialItem">
        <div className="detialItemLeft">Token Fee</div>
        <div className="detialItemRight">
        {bridge.fromToken} {Number(bridge.tokenFee).toFixed(2)} 
        </div>
      </div>
      <div className="detialItem">
        <div className="detialItemLeft">Destination Gas (Est.)</div>
        <div className="detialItemRight">
        {nativeCurrency} {formattedFee && formattedFee.toFixed(8)}
        </div>
      </div>
    </>
  );
}
