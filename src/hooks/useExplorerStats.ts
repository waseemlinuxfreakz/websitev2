import { useEffect, useState } from "react";
import { txBackend } from "../types";

export default function useExplorerStats() {
  let interval: string | number | NodeJS.Timeout | undefined;

  const [txCount, setTxCount] = useState<number>(0);
  const [uniqueAddresses, setUniqueAddresses] = useState<number>(0);
  const [ttlTransactions, setTtlTransactions] = useState<number>(0);
  const [ttlAmount, setTotalAmount] = useState<number>(0.0);

  async function fetchData() {
    try {
      const result = await fetch(`${txBackend}/explorerStats/`);
      const data: {
        ok: boolean;
        count: number;
        unique: number;
        ttlTxs: number;
        totalAmount: number;
      } = await result.json();

      if (data && data.ok) {
        setTxCount(data.count);
        setUniqueAddresses(data.unique);
        setTtlTransactions(data.ttlTxs);
        setTotalAmount(data.totalAmount);
      }
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    if (txCount === 0) {
      (async () => {
        await fetchData();
      })();
    }

    interval = setInterval(() => {
      fetchData();
    }, 30_000);

    return () => clearInterval(interval);
  });

  return { txCount, uniqueAddresses, ttlTransactions, ttlAmount };
}
