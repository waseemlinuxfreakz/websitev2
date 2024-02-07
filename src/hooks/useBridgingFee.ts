import { getProvider } from "../utils";
import { TChainName, TTxStatus } from "../types";
import { TransactionReceipt } from "viem";
import { useEffect, useState } from "react";

function toTitleCase(word: string): TTxStatus | undefined {
    if (!word) return undefined;
    return word[0].toUpperCase()
        + word.slice(1).toLocaleLowerCase() as TTxStatus;
}

function getTxFee(
    txReceipt: TransactionReceipt | undefined
): number {
    if (txReceipt) {
        const _gasUsed: number = parseInt(txReceipt.gasUsed.toString())
        const _effectiveGasPrice: number = parseInt(txReceipt.effectiveGasPrice.toString())
        return _gasUsed * _effectiveGasPrice / 1e18;
    }
    return 0;
}


const getTxData = async (hash: string, chainName: TChainName) => {

    if (hash && chainName) {
        try {

            const provider = getProvider(chainName);

            const txReceipt: TransactionReceipt = await provider.getTransactionReceipt({
                hash: `0x${hash.replace('0x', '')}`
            });

            return txReceipt;

        } catch (error: any) {
            console.error(`useBridgingFee:getTxData:Error: ${error.message}`)
            return undefined;
        }

    }

    return undefined;
}

export default function useBridgingFee(
    fromHash: string,
    fromChain: TChainName,
    toHash: string,
    toChain: TChainName
) {

    const [fromFee, setFromFee] = useState<number>(0);
    const [toFee, setToFee] = useState<number>(0);

    const [fromStatus, setFromStatus] = useState<TTxStatus | undefined>('pending');
    const [toStatus, setToStatus] = useState<TTxStatus | undefined>('pending');
    const [status, setCommonStatus] = useState<TTxStatus>('pending');


    useEffect(() => {
        
        if ( // Only request if
            fromHash // we have the hash
            && fromChain // we have the chain name
            // BUT
            && !fromFee // Original fee is 0.00
            && (
                fromStatus == 'pending' // Transaction has not resolved
                || fromStatus == undefined // No status received
            )) {
            (async () => {
                const receipt = await getTxData(fromHash, fromChain);
                if(receipt){
                    setFromFee(getTxFee(receipt));
                    setFromStatus(toTitleCase(receipt!.status));
                }
                
            })();
        }

    }, [fromHash, fromChain]);


    useEffect(() => {
        if (toHash && toChain) {
            (async () => {
                const receipt = await getTxData(toHash, toChain);
                if(receipt){
                    setToFee(getTxFee(receipt));
                    setToStatus(toTitleCase(receipt!.status));
                }
            })();
        }

    }, [toHash, toChain]);

    useEffect(() => {

        if (fromStatus) {
            if (fromStatus == 'success') {

                if (toStatus) {
                    setCommonStatus(toStatus)
                }

            } else {
                // If the original TX failed =>
                // Destination TX never started
                setCommonStatus(fromStatus)
            }
        }

    }, [fromStatus, toStatus])

    return { fromFee, toFee, status }

}