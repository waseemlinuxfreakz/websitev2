import { useEffect, useState } from "react";
import { useAppSelector } from "./storage";
import { Transaction } from "emmet.js/dist/factory/types";
import { chainFactory } from "../store/chainFactory";
import { CHAIN_NAME_TO_INNER_ID, TChainName } from "emmet.js/dist/factory/types/constants";
import { Chain } from "emmet.js/dist/factory/types"
import { ValueOf } from "viem";
import { Web3Helper } from "emmet.js/dist/chains/web3";
import { CrossChainTransaction } from "@emmet-contracts/web3/dist/contracts/consensus/Consensus";
import { ReceiveParams } from "emmet.js";

export default function useCircleTxData() {

  const bridge = useAppSelector((state) => state.bridge);

  function convertCCTStructToTx(
    cctStruct: CrossChainTransaction.CCTStructOutput,
    helper: Web3Helper
  ): Transaction {
    const parsed: ReceiveParams = helper.parseCallData(cctStruct.data) as ReceiveParams;

    const tx: Transaction = {
      txHash: cctStruct.txHash,
      sentAmount: parsed.sentAmount,
      receivedAmount: parsed.receiveAmount,
      fromToken: parsed.fromToken,
      toToken: parsed.toToken,
      originalHash: cctStruct.originalHash,
      destinationHash: cctStruct.destinationHash,
      started: cctStruct.started,
      finished: cctStruct.finished,
      recipient: parsed.to,
    } as Transaction;

    return tx;
  }

  const initData = {
    txHash: "",
    sentAmount: BigInt(0),
    receivedAmount: BigInt(0),
    fromToken: "EMMET",
    toToken: "EMMET",
    destinationHash: "",
    originalHash: "",
    fromChainId: BigInt(0),
    toChainId: BigInt(0),
    nonce: BigInt(0),
    recipient: "",
    finished: BigInt(0),
    started: BigInt(Date.now()),
  } as Transaction;

  const [txData, setTxData] = useState<Transaction>(initData);
  const [hash, setHash] = useState(bridge.fromHash);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let interval: string | number | NodeJS.Timeout | undefined;

  async function fetchData() {
    setIsError(false);
    setIsLoading(true);

    try {

      if (hash) {

        const chainId = CHAIN_NAME_TO_INNER_ID[bridge.fromChain.toLowerCase() as TChainName] as any;

        const fromChainHelper = await chainFactory.inner(chainId)

        const ccmHash = await fromChainHelper.emmetHashFromtx(hash);

        const polygon: Web3Helper = await chainFactory.inner(Chain.POLYGON);

        const ccmTX: CrossChainTransaction.CCTStructOutput = await polygon.getConsensusTransaction(ccmHash) as CrossChainTransaction.CCTStructOutput;

        if (ccmTX) {
          setTxData(convertCCTStructToTx(ccmTX, polygon));
        }
      }
    } catch (error) {
      setIsError(true);
      console.error(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (bridge.toHash.length == 0) {

      interval = setInterval(() => {
        fetchData();
      }, 6_000);
  
      return () => clearInterval(interval);
    }
    
  }, [bridge.toHash]);

  return [{ txData, isLoading, isError }, setHash];
}
