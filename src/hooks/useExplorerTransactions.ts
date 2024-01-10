import { useEffect, useState } from "react";
import { TTxType, TxDetails, txBackend } from '../types';

export default function useExplorerTransactions (page:number) {

    let interval: string | number | NodeJS.Timeout | undefined;

    const [txs, setTxs] = useState([]);

    async function fetchData() {
        try {
            const response: Response = await fetch(`${txBackend}/pages/page/?page=${page}`);
            const data = await response.json();
            data && setTxs(data);
            
        } catch (error:any) {
            console.warn(error.message)
        }
    }

    const refresh = () => {
        (async () => {
            await fetchData();
        })();
    }

    useEffect(() => {

        if(txs.length == 0){
            refresh()
        } else{
            interval = setInterval(async () => {
                await fetchData();
            }, 60_000)
    
            return () => clearInterval(interval);
        }

    });

    

    return {txs, refresh};

}