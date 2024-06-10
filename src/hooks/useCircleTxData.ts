import { useEffect, useState } from "react";
import { setBridgeToHash } from "../store/bridgeSlice";
import { useAppSelector, useAppDispatch } from "./storage";
import { TTxType, TxDetails, txBackend } from "../types";
import { setBridgeTransaction } from "../store/explorerSlice";
import { Transaction } from "emmet.js/dist/factory/types";
import { chainFactoryTestnet } from "../store/chainFactory";

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
    finished: BigInt(0),
    started: BigInt(0),
    txHash: "",
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
        // const result: Response = await fetch(`${txBackend}/hash/?hash=${hash}`);
        // let CircleTXData: Transaction = await result.json();
        const result = await chainFactoryTestnet.getTransactions(25, 0);

        const txn = result.find(
          (tx) => tx.originalHash === hash.replace("0x", ""),
        );

        console.log({ txn });

        if (txn) {
          setTxData(txn);
          // TODO: may need to uncomment later
          // dispatch(setBridgeTransaction(txn));
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
