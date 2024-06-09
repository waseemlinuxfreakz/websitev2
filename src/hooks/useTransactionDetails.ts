import { useEffect, useState } from "react";
// import { TxDetails, txBackend } from "../types";
import { chainFactoryTestnet } from "../store/chainFactory";
import { DetailedTx } from "emmet.js/dist/factory/types";
import { useAppSelector, useAppDispatch } from "./storage";
import { setBridgeTransaction } from "../store/explorerSlice";

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
    console.log({ running: true, emmetHash });
    const data = await chainFactoryTestnet.getTransaction(emmetHash);
    console.log({ data });

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
  const [data, setData] = useState<DetailedTx | {}>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (emmetHash) {
      (async () => {
        const _data = await fetchData(emmetHash);
        if ("nonce" in _data) {
          setData(_data);
          dispatch(setBridgeTransaction(_data));
        }
      })();
    }
  }, [emmetHash]);

  return data;
}
