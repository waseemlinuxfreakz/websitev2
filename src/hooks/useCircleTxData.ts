import { useEffect, useState } from "react";
import { setBridgeToHash } from "../store/bridgeSlice";
import { useAppSelector, useAppDispatch } from "./storage";
import { TTxType, TxDetails, txBackend } from "../types";
import { setBridgeTransaction } from "../store/explorerSlice";
import { Transaction } from "emmet.js/dist/factory/types";

export default function useCircleTxData() {
  const bridge = useAppSelector((state) => state.bridge);
  const dispatch = useAppDispatch();

  const initData = {
    amount: BigInt(0),
    fromToken: "USDC",
    toToken: "USDC",
    destinationHash: "",
    originalHash: "",
    fromChainId: BigInt(0),
    toChainId: BigInt(0),
    nonce: BigInt(0),
    recipient: "",
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
        const result: Response = await fetch(`${txBackend}/hash/?hash=${hash}`);
        let CircleTXData: Transaction = await result.json();

        console.log({ result });

        if (CircleTXData) {
          setTxData(CircleTXData);

          // CircleTXData.txType = "Transfer";

          // if (CircleTXData && CircleTXData.claimHash) {
          //   CircleTXData.status = "success";
          // } else {
          //   CircleTXData.status = "pending";
          // }

          // TODO: may need to uncomment later
          // dispatch(setBridgeTransaction(CircleTXData));
        }
      }
    } catch (error) {
      setIsError(true);
      console.error(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    interval = setInterval(() => {
      fetchData();
    }, 6_000);

    return () => clearInterval(interval);
  }, []);

  return [{ txData, isLoading, isError }, setHash];
}
