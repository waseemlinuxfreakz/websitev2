import { useEffect, useState } from "react";
// import { TxDetails, txBackend } from "../types";
import { chainFactoryTestnet } from "../store/chainFactory";
import { useAppSelector, useAppDispatch } from "./storage";
import {
  setBridgeTransaction,
  DetailedTx as _DetailedTx,
} from "../store/explorerSlice";
import { DetailedTx } from "emmet.js/dist/factory/types";

/**
 * Requests for data by a bridge TX
 * @param hash
 * @returns TxDetails | {} in a promise
 */
const fetchData = async (emmetHash: string): Promise<DetailedTx | {}> => {
  try {
    // const response: Response = await fetch(
    //   `${txBackend}/transactions/tx/?tx=${hash}`
    // );
    // const data: TxDetails = await response.json();
    const data = await chainFactoryTestnet.getTransaction(emmetHash);
    return data;
  } catch (error: any) {
    console.warn(`useGetBridgeTx:fetchData:Error: ${error.message}`);
    return {};
  }
};

/**
 * HOOK: Retrievs a Bridge TX data
 * @param emmetHash - bridge transaction hash
 * @returns Transaction data or {}
 */
export default function useTransactionDetails(emmetHash: string) {
  const [data, setData] = useState<_DetailedTx | {}>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (emmetHash) {
      (async () => {
        const _data = await fetchData(emmetHash);
        if ("nonce" in _data) {
          const __data = {
            txHash: _data.txHash,
            nonce: Number(_data.nonce),
            amount: Number(_data.amount),
            fromChainId: Number(_data.fromChainId),
            toChainId: Number(_data.toChainId),
            fromToken: _data.fromToken,
            toToken: _data.toToken,
            recipient: _data.recipient,
            originalHash: _data.originalHash,
            destinationHash: _data.destinationHash,
            started: Number(_data.started),
            finished: Number(_data.finished),
            fromChainTimestamp: Number(_data.fromChainTimestamp),
            targetChainTimestamp: Number(_data.targetChainTimestamp),
            fromChainFees: Number(_data.fromChainFees),
            targetChainFees: Number(_data.targetChainFees),
            protocolFee: Number(_data.protocolFee),
          };
          setData(__data);
          dispatch(setBridgeTransaction(__data));
        }
      })();
    }
  }, [emmetHash]);

  return data;
}
