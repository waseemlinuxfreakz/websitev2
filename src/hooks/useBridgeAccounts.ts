import { useEffect } from "react";
import { useAccount } from "wagmi";
import { useTonAddress } from "@tonconnect/ui-react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useAppDispatch, useAppSelector } from "./storage";
import { ChainNameToTypeChainName, TNetwork } from "../types";
import { TChainName } from "emmet.js";
import { setReceiver, setSenderAddress } from "../store/bridgeSlice";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

const tonChains: TChainName | string[] = ['ton', 'tontestnet'];
const solanaChains: TChainName | string[] = ['solana'];

export default function useBridgeAccounts() {

    const dispatch = useAppDispatch();
    const bridge = useAppSelector((state) => state.bridge);
    let toProtocol: TNetwork = "INACTIVE";

    //   I N J E C T E D    A C C O U N T S
    const evmAccount = useAccount();
    const solanaWallet = useWallet();
    const tonAddress: string = useTonAddress();

    useEffect(() => {

        //  I S  A C T I V E  C H E C K
        const isEvmActive: boolean = !!(evmAccount && evmAccount.isConnected && evmAccount.address);
        const isSolanaActive: boolean = !!(solanaWallet && solanaWallet.connected && solanaWallet.publicKey);
        const isTonConnected: boolean = tonAddress.length > 0;

        //  P R O T O C O L   S E L E C T O R
        function whichProtocol(chainName: TChainName): TNetwork {

            const protocol = tonChains.includes(ChainNameToTypeChainName[chainName])
                ? "TON"
                : solanaChains.includes(ChainNameToTypeChainName[chainName])
                    ? "SOLANA"
                    : isEvmActive
                        ? "EVM"
                        : "INACTIVE";

            return protocol;
        }

        //  A C C O U N T S  S E T T E R
        function setAccounts(
            protocol: TNetwork,
            setAccount: ActionCreatorWithPayload<string, "bridge/setReceiver" | "bridge/setSenderAddress">
        ) {
            if (protocol === "TON" && isTonConnected) {
                dispatch(setAccount(tonAddress));
            } else if (protocol === "SOLANA" && isSolanaActive) {
                dispatch(setAccount(solanaWallet.publicKey!?.toString() || ""));
            } else if (protocol === "EVM" && isEvmActive) {
                dispatch(setAccount(evmAccount.address as string))
            } else {
                dispatch(setAccount(""));
            }
        }

        //  F R O M   N E T W O R K  S E T U P
        const fromProtocol = whichProtocol(bridge.fromChain as TChainName);
        setAccounts(fromProtocol, setSenderAddress);

        //  T O   N E T W O R K  S E T U P
        toProtocol = whichProtocol(bridge.toChain as TChainName);
        setAccounts(toProtocol, setReceiver);

    }, [bridge.fromChain, bridge.toChain, evmAccount, solanaWallet, tonAddress, dispatch]);

    return {
        evmAccount,
        solanaWallet,
        tonAddress,
        toProtocol
    }
}