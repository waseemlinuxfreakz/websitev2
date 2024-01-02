import { useEffect, useState } from "react";
import { setBridgeToHash } from '../store/bridgeSlice';
import { useAppSelector, useAppDispatch } from './storage';
import { txBackend } from '../types';
import {
    setExplorerBridgeAge,
    setExplorerBridgeTxType,
    setExplorerBridgeHash,
    setExplorerBridgeDestinationHash,
    setExplorerBridgeReceived,
    setExplorerBridgeSent,
    setExplorerBridgeStatus,
} from '../store/explorerSlice';

export type TxDetails = {
    amount: number, // number of transferred tokens
    bridgeHash: string,
    burnToken: string, // the address of the transferred token
    mintRecipient: string, // Receiver address
    destinationDomain: number, // Number 0-7, Ethereum == 0, Polygon == 7
    // Additional params
    originalDomain: number,
    sender: string,
    burnHash: string,
    start: Date,
    claimHash?: string, // Will arrive when the token is claimed
    finished?: Date
}

export default function useCircleTxData() {

    const bridge = useAppSelector((state) => state.bridge);
    const dispatch = useAppDispatch();

    const initData = {
        amount: 0,
        bridgeHash: "",
        burnToken: '',
        mintRecipient: bridge.receiver,
        destinationDomain: -1,
        originalDomain: -1,
        sender: '',
        burnHash: bridge.fromHash,
        start: new Date(),
        claimHash: '',
        finished: new Date()
    }

    const [txData, setTxData] = useState<TxDetails>(initData);
    const [hash, setHash] = useState(bridge.fromHash);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    let interval: string | number | NodeJS.Timeout | undefined;

    async function fetchData() {

        setIsError(false);
        setIsLoading(true);

        try {
            const result: Response = await fetch(`${txBackend}/hash/?hash=${hash}`);
            const CircleTXData: TxDetails = await result.json();
            console.log("CircleTXData:", CircleTXData)
            setTxData(CircleTXData);

            if (CircleTXData && CircleTXData.claimHash) {
                dispatch(setBridgeToHash(CircleTXData.claimHash))

                dispatch(setExplorerBridgeAge(CircleTXData.start));
                dispatch(setExplorerBridgeTxType('Transfer'));
                dispatch(setExplorerBridgeHash(CircleTXData.bridgeHash));
                dispatch(setExplorerBridgeDestinationHash(CircleTXData.claimHash));
                dispatch(setExplorerBridgeReceived(CircleTXData.amount)); // !!! May be different for non USDC
                dispatch(setExplorerBridgeSent(CircleTXData.amount)); // !!! May be different for non USDC

                if(CircleTXData && CircleTXData.claimHash){
                    dispatch(setExplorerBridgeStatus("Success"));
                } else {
                    dispatch(setExplorerBridgeStatus("Pending"));
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
        }, 30_000)

        return () => clearInterval(interval);



    }, []);

    return [{ txData, isLoading, isError }, setHash];

}