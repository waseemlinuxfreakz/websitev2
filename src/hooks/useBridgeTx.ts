import { useEffect, useState } from "react";
import { TxDetails, txBackend } from "../types";
import { chainFactoryTestnet } from "../store/chainFactory";

/**
 * Requests for data by a bridge TX
 * @param hash
 * @returns TxDetails | {} in a promise
 */
const fetchData = async (hash: string): Promise<TxDetails | {}> => {
  try {
    const response: Response = await fetch(
      `${txBackend}/transactions/tx/?tx=${hash}`,
    );
    const data: TxDetails = await response.json();
    // const data = await chainFactoryTestnet.getTransaction(hash);

    if (data) {
      if (data.claimHash) {
        data.status = "success";
      } else {
        data.status = "pending";
      }
      data.txType = "Transfer";
      return data;
    }
    return {};
  } catch (error: any) {
    console.warn(`useGetBridgeTx:fetchData:Error: ${error.message}`);
    return {};
  }
};

/**
 * HOOK: Retrievs a Bridge TX data
 * @param hash - bridge transaction hash
 * @returns Transaction data or {}
 */
export default function useBridgeTx(hash: string): TxDetails | {} {
  const [data, setData] = useState<TxDetails | {}>({});

  useEffect(() => {
    if (hash) {
      (async () => {
        setData(await fetchData(hash));
      })();
    }
  }, [hash]);

  return data;
}
