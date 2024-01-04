import { useEffect, useState } from "react";
import { TChainName } from "../types";
import { getProvider } from "../utils";

/**
 * Retrievs the transaction value (bridge fee)
 * @param hash the hash of the querried transaction
 * @param provider a viem provider
 * @returns 
 */
async function getTransactionValue(hash: string, provider: any): Promise<number> {
    try {
        const TX = await provider.getTransaction({
            hash: `0x${hash.replace('0x', '')}`
        });
        
        const amount = Number(TX.value.toString());
        return amount;

    } catch (error: any) {
        console.error(new Date(), `GetTransactionValue Error: ${error.message}`)
        return 0;
    }
}

export default function useGetTxValue(hash:string, chainName: TChainName) {

    const [amount, setAmount] = useState(0);

    useEffect(() => {

        (async () => {
            if(hash && chainName){
                const provider = getProvider(chainName);

                const amt = await getTransactionValue(hash, provider)
                setAmount(amt)
            }
            
        })()

    }, [hash, chainName])

    return amount;
}