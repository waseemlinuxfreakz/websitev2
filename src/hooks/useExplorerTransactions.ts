import { useEffect, useState } from "react";
import { chainFactoryTestnet } from "../store/chainFactory";
import { Transaction } from "emmet.js/dist/factory/types";

export default function useExplorerTransactions(page: number) {
  let interval: string | number | NodeJS.Timeout | undefined;

  const [txs, setTxs] = useState<Transaction[]>([]);

  async function fetchData() {
    try {
      // const response: Response = await fetch(`${txBackend}/pages/page/?page=${page}`);
      // const data = await response.json();
      const data = await chainFactoryTestnet.getTransactions(
        50,
        (page - 1) * 10,
      );
      data && setTxs(data);
    } catch (error: any) {
      console.error(error.message);
    }
  }

  const refresh = () => {
    (async () => {
      await fetchData();
    })();
  };

  useEffect(() => {
    if (txs.length == 0) {
      refresh();
    } else {
      interval = setInterval(async () => {
        await fetchData();
      }, 60_000);

      return () => clearInterval(interval);
    }
  });

  return { txs, refresh };
}
