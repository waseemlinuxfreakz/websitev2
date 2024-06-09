import React, { useEffect } from "react";
import TransactionDetailsLeft from "./TransactionDetailsLeft";
import TransactionDetailsRight from "./TransactionDetailsRight";
import { useAppSelector } from "../../../hooks/storage";
import useBridgingFee from "../../../hooks/useBridgingFee";
import { getDomainToChainName } from "../../../utils";
import { useParams } from "react-router-dom";

export default function TransactionDetailsArea() {
  // Bridge transaction
  const btx = useAppSelector((store) => store.explorer.bridgeTransaction);

  // const { fromFee, toFee, status } = useBridgingFee(
  //     btx.burnHash,
  //     getDomainToChainName(btx.originalDomain),
  //     btx.claimHash,
  //     getDomainToChainName(btx.destinationDomain)
  // );

  return (
    <div className="transactionDetailsArea">
      <div className="row">
        <div className="col-lg-6">
          <TransactionDetailsLeft />
        </div>
        {/* TODO: update fromFee and toFee */}
        <div className="col-lg-6">
          <TransactionDetailsRight fromFee={0} toFee={0} />
        </div>
      </div>
    </div>
  );
}
