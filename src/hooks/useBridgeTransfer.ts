import { addressToAccount, addressToBytes32 } from '../utils';
import { TChainName, TTokenName, ChainNameToTypeChainName, CHAIN_NAME_TO_ID, SUPPORTED_CHAINS } from '../types';
import {
    useContractWrite,
    usePrepareContractWrite,
    useAccount,
} from 'wagmi';
import { Hash } from 'viem';
import { setBridgeError, setBridgeAllowance } from '../store/bridgeSlice';
import { useAppDispatch, useAppSelector } from './storage';
import { useEffect, useState } from 'react';
import { circleBurner } from '../abis/circleBurner';
import { ChainToDestinationDomain } from '../types';

export function useBridgeTransfer() {

    const { address } = useAccount();

    const dispatch = useAppDispatch();

    const bridge = useAppSelector((state) => state.bridge);



    const [chainId, setChainId] = useState<number>(CHAIN_NAME_TO_ID[ChainNameToTypeChainName[bridge.fromChain]]);

    const [bridgeAddress, setBridgeAddress] = useState<string>(SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.fromChain]].bridge);


    const [tokenName, setTokenName] = useState<TTokenName>(bridge.fromToken as TTokenName);


    const [decimals, setDecimals] = useState<bigint>(bridge.decimals ? BigInt(bridge.decimals) : 18n);

    const [formattedAmount, setFormattedAmount] = useState<bigint>(BigInt(Number(bridge.amount) * 10 ** Number(decimals.toString())));


    const [destinationDomain, setDestinationDomain] = useState<number>(ChainToDestinationDomain[ChainNameToTypeChainName[bridge.toChain]]);

    const [mintRecpient, setMintRecipient] = useState<Hash>(addressToBytes32(addressToAccount(bridge.receiver)));



    useEffect(() => {
        setChainId(CHAIN_NAME_TO_ID[ChainNameToTypeChainName[bridge.fromChain]]);
        setBridgeAddress(SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.fromChain]].bridge);
    }, [bridge.fromChain]);

    useEffect(() => {
        setTokenName(bridge.fromToken as TTokenName);
    }, [bridge.fromToken]);

    useEffect(() => {
        setDecimals(bridge.decimals ? BigInt(bridge.decimals) : 18n);
        setFormattedAmount(BigInt(Number(bridge.amount) * 10 ** Number(decimals.toString())));
    }, [bridge.decimals]);

    useEffect(() => {
        setDestinationDomain(ChainToDestinationDomain[ChainNameToTypeChainName[bridge.toChain]]);
    }, [bridge.toChain]);

    useEffect(() => {
        setMintRecipient(addressToBytes32(addressToAccount(bridge.receiver)));
    }, []);


    const { config } = usePrepareContractWrite({
        address: addressToAccount(bridgeAddress),
        account: address,
        abi: circleBurner,
        functionName: 'depositForBurn',
        args: [
            formattedAmount,
            destinationDomain,
            mintRecpient,
            tokenName
        ],
        chainId,
        onError(err) {
            dispatch(setBridgeError(err.message));
        }
    });

    const { data, isLoading, isSuccess, write } = useContractWrite(config);

    if (data) {
        console.log("useBridgeTransfer:data:", data)
    }

    return { transferData: data, istransferLoading: isLoading, istransferSuccess: isSuccess, transfer: write };

}