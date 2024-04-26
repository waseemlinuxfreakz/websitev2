import { useEffect, useState } from "react";
import { setBridgeToHash } from "../store/bridgeSlice";
import { useAppSelector, useAppDispatch } from "./storage";
import { TTxType, TxDetails, txBackend } from "../types";
import { setBridgeTransaction } from "../store/explorerSlice";

export default function useCircleTxData() {
  const bridge = useAppSelector((state) => state.bridge);
  const dispatch = useAppDispatch();

  const initData = {
    amount: 0,
    bridgeHash: "",
    burnToken: "",
    mintRecipient: bridge.receiver,
    destinationFee: 0,
    destinationDomain: -1,
    originalDomain: -1,
    originFee: 0,
    sender: "",
    burnHash: bridge.fromHash,
    start: new Date(),
    symbol: "",
    claimHash: "",
    finished: new Date(),
    txType: "Transfer",
  } as TxDetails;

  const [txData, setTxData] = useState<TxDetails>(initData);
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
        let CircleTXData: TxDetails = await result.json();

        console.log({ result });

        if (CircleTXData) {
          setTxData(CircleTXData);

          CircleTXData.txType = "Transfer";

          if (CircleTXData && CircleTXData.claimHash) {
            CircleTXData.status = "success";
          } else {
            CircleTXData.status = "pending";
          }

          dispatch(setBridgeTransaction(CircleTXData));
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
