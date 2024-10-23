import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useTonAddress } from "@tonconnect/ui-react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useAppDispatch, useAppSelector } from "./storage";
import { ChainNameToTypeChainName, TNetwork } from "../types";
import { TChainName } from "emmet.js";
import { setReceiver, setSenderAddress } from "../store/bridgeSlice";

const tonChains: TChainName | string[] = [
    'ton', 'tontestnet'
];

const solanaChains: TChainName | string[] = [
    'solana'
];

export default function useBridgeAccounts() {

    const dispatch = useAppDispatch();
    const bridge = useAppSelector((state) => state.bridge);

    //   I N J E C T E D    A C C O U N T S
    const evmAccount = useAccount();
    const solanaWallet = useWallet();
    const tonAddress: string = useTonAddress();

    //  I S  A C T I V E  C H E C K
    const isEvmActive: boolean = (evmAccount && evmAccount.isConnected && evmAccount.address) as boolean;
    const isSolanaActive: boolean = (solanaWallet && solanaWallet.connected && solanaWallet.publicKey) as boolean;
    const isTonConnected: boolean = tonAddress.length > 0;

    //  L O C A L  S T O R A G E
    const [fromAddress, setFromAddress] = useState("");
    const [destAddress, setDestAddress] = useState("");
    const [fromNetwork, setFromNetwork] = useState<TNetwork>("INACTIVE");
    const [toNetwork, setToNetwork] = useState<TNetwork>("INACTIVE");

    function setFromEmpty() {
        setFromAddress("");
        dispatch(setSenderAddress(""));
    }

    function setToEmpty() {
        setDestAddress("");
        dispatch(setReceiver(""));
    }

    useEffect(() => { //    F R O M   C H A I N

        const network = tonChains.includes(ChainNameToTypeChainName[bridge.fromChain])
            ? "TON"
            : solanaChains.includes(ChainNameToTypeChainName[bridge.fromChain])
                ? "SOLANA"
                : isEvmActive
                    ? "EVM"
                    : "INACTIVE";

        setFromNetwork(network);

        switch (network) {
            case "TON":
                if (isTonConnected) {
                    setFromAddress(tonAddress);
                    dispatch(setSenderAddress(tonAddress));
                } else {
                    setFromEmpty();
                }
                break;
            case "SOLANA":
                if (isSolanaActive) {
                    const solAddress = solanaWallet.publicKey!?.toString();
                    setFromAddress(solAddress);
                    dispatch(setSenderAddress(solAddress));
                } else {
                    setFromEmpty();
                }
                break;
            case "EVM":
                if (isEvmActive) {
                    const evmAddr: string = evmAccount.address as string;
                    setFromAddress(evmAddr);
                    dispatch(setSenderAddress(evmAddr));
                } else {
                    setFromEmpty();
                }
                break;
            default: // INACTIVE
                setFromEmpty();
                break;
        }

    }, [
        bridge.fromChain,
        evmAccount,
        solanaWallet,
        tonAddress,
        isEvmActive,
        isSolanaActive,
        isTonConnected
    ]);

    useEffect(() => { //    T O   C H A I N

        const network = tonChains.includes(ChainNameToTypeChainName[bridge.toChain])
            ? "TON"
            : solanaChains.includes(ChainNameToTypeChainName[bridge.fromChain])
                ? "SOLANA"
                : isEvmActive
                    ? "EVM"
                    : "INACTIVE";

        setToNetwork(network);

        switch (network) {
            case "TON":
                if (isTonConnected) {
                    setDestAddress(tonAddress);
                    dispatch(setReceiver(tonAddress));
                } else {
                    setToEmpty();
                }
                break;
            case "SOLANA":
                if (isSolanaActive) {
                    const solAddress = solanaWallet.publicKey!?.toString();
                    setDestAddress(solAddress);
                    dispatch(setReceiver(solAddress));
                } else {
                    setToEmpty();
                }
                break;
            case "EVM":
                if (isEvmActive) {
                    const evmAddr: string = evmAccount.address as string;
                    setDestAddress(evmAddr);
                    dispatch(setReceiver(evmAddr));
                } else {
                    setToEmpty();
                }
                break;
            default: // INACTIVE
                setToEmpty();
                break;
        }

    }, [bridge.toChain,
        evmAccount,
        solanaWallet,
        tonAddress,
        isEvmActive,
        isSolanaActive,
        isTonConnected
    ]);

    return {
        fromAddress,
        evmAccount,
        solanaWallet,
        tonAddress,
        destAddress,
        isEvmActive,
        isSolanaActive,
        isTonConnected,
        fromNetwork,
        toNetwork
    }

}