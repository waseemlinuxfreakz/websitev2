import { useEffect, useState } from "react";
import { txBackend } from "../types";
import { chainFactoryTestnet } from "../store/chainFactory";
import { ExplorerMeta } from "emmet.js/dist/factory/types";

export default function useExplorerStats() {
  let interval: string | number | NodeJS.Timeout | undefined;

  const [stats, setStats] = useState<ExplorerMeta>({
    total24HourTransactions: BigInt(0),
    totalFees: BigInt(0),
    totalTransactions: BigInt(0),
    totalVolume: BigInt(0),
    uniqueUser: BigInt(0),
  });
  // const [uniqueAddresses, setUniqueAddresses] = useState<number>(0);
  // const [ttlTransactions, setTtlTransactions] = useState<number>(0);
  // const [ttlAmount, setTotalAmount] = useState<number>(0.0);

  async function fetchData() {
    try {
      const result = await chainFactoryTestnet.getExplorerStats();
      setStats(result);
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    if (stats.totalTransactions === BigInt(0)) {
      (async () => {
        await fetchData();
      })();
    }

    interval = setInterval(() => {
      fetchData();
    }, 30_000);

    return () => clearInterval(interval);
  });

  return { stats };
}
