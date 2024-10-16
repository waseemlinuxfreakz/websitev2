import React, { useEffect, useState } from "react";

import { useAppSelector, useAppDispatch } from "../../../hooks/storage";
import { findChain } from "../../../utils";
import {
  ChainNameToTypeChainName,
  CHAIN_LOGOS,
  CHAIN_ID_TO_NAME,
} from "../../../types";
import TransactionCountUp from "./TransactionCountUp";
import useCircleTxData from "../../../hooks/useCircleTxData";
import {
  setBridgeIsRunning,
  setBridgeToHash,
  setBridgeReceive,
} from "../../../store/bridgeSlice";

function TransactionProgress() {
  const Success = "../img/transfer-progress/Success-Serpantine.svg";

  const bridge = useAppSelector((state) => state.bridge);
  const dispatch = useAppDispatch();
  const [{ txData }] = useCircleTxData();

  const [fromChain, setFromChain] = useState(
    findChain(ChainNameToTypeChainName[bridge.fromChain]),
  );
  const [toChain, setToChain] = useState(
    findChain(ChainNameToTypeChainName[bridge.toChain]),
  );

  useEffect(() => {
    if (bridge.fromChain) {
      setFromChain(findChain(ChainNameToTypeChainName[bridge.fromChain]));
    }
  }, [bridge.fromChain]);

  useEffect(() => {
    if (bridge.toChain) {
      setToChain(findChain(ChainNameToTypeChainName[bridge.toChain]));
    }
  }, [bridge.toChain]);

  useEffect(() => {
    if (txData.destinationHash) {
      dispatch(setBridgeIsRunning(false));
      dispatch(setBridgeToHash(txData.destinationHash));
    }
  }, [txData.destinationHash]);

  useEffect(() => {

    if (txData.receivedAmount) {
      dispatch(setBridgeReceive((Number(txData.receivedAmount.toString()) / 10 ** 18)))
    }

  }, [txData.txHash])

  return (
    <div
      className={`progressBox ${txData.destinationHash && "progressSuccess"}`}
    >
      {/* The first chain Circle */}
      <div className="fromProgress">
        <img
          src={CHAIN_LOGOS[CHAIN_ID_TO_NAME[fromChain.id]]}
          alt={fromChain.name}
        />
      </div>
      <div className="progressDetails">
        <div className="progressTitle">
          <p className="FirstText">Transaction in progress</p>
          <p className="successText">
            <img src={Success} alt="Success" />
            Successful transaction!
          </p>
        </div>
        <TransactionCountUp start={txData.txHash ? txData.started * 1000n : txData.started} />
      </div>
      {/* The second chain Circle */}
      <div className="toProgress">
        <img
          src={CHAIN_LOGOS[CHAIN_ID_TO_NAME[toChain.id]]}
          alt={toChain.name}
        />
      </div>
    </div>
  );
}

export default TransactionProgress;
