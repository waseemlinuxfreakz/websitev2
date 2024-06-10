import React from "react";
import { useAppSelector } from "../../../hooks/storage";
import {
  SUPPORTED_CHAINS,
  ChainNameToTypeChainName,
  destCircleClaimFee,
} from "../../../types";

export default function DestinationGasEstimation() {
  const bridge = useAppSelector((state) => state.bridge);
  const destinationFee =
    destCircleClaimFee[ChainNameToTypeChainName[bridge.toChain]].toFixed(7);
  const destCurrency =
    SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.toChain]].nativeCurrency
      .symbol;

  return (
    <div className="detialItem">
      <div className="detialItemLeft">Destination Gas Fee (Est.)</div>
      <div className="detialItemRight">
        {destinationFee} {destCurrency}
      </div>
    </div>
  );
}
