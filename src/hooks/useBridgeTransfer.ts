import { addressToAccount, addressToBytes32 } from '../utils';
import { TChainName, TTokenName, ChainNameToTypeChainName, CHAIN_NAME_TO_ID, SUPPORTED_CHAINS } from '../types';
import {
    useContractWrite,
    usePrepareContractWrite,
    useAccount,
} from 'wagmi';
import { Hash } from 'viem';
import { setBridgeError, setBridgeIsFailure, setBridgeIsSuccess, setBridgeIsLoading, showBridgeProgress } from '../store/bridgeSlice';
import { useAppDispatch, useAppSelector } from './storage';
import { useEffect, useState } from 'react';
import { circleBurner } from '../abis/circleBurner';
import { ChainToDestinationDomain } from '../types';
import useBridgFee from './useBridgeFee';

export default function useBridgeTransfer() {

    const { address } = useAccount();

    const { fee } = useBridgFee();

    const dispatch = useAppDispatch();

    const bridge = useAppSelector((state) => state.bridge);



    const [chainId, setChainId] = useState<number>(CHAIN_NAME_TO_ID[ChainNameToTypeChainName[bridge.fromChain]]);

    const [bridgeAddress, setBridgeAddress] = useState<string>(SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.fromChain]].bridge);


    const [tokenName, setTokenName] = useState<string>(bridge.fromToken);


    const [decimals, setDecimals] = useState<bigint>(bridge.decimals ? BigInt(bridge.decimals) : 18n);

    const [formattedAmount, setFormattedAmount] = useState<bigint>(BigInt(Number(bridge.amount) * 10 ** Number(decimals.toString())) || 1n);


    const [destinationDomain, setDestinationDomain] = useState<number>(ChainToDestinationDomain[ChainNameToTypeChainName[bridge.toChain]]);

    const [mintRecipient, setMintRecipient] = useState<Hash>(addressToBytes32(addressToAccount(bridge.receiver)));



    useEffect(() => {
        if(bridge.fromChain){
            setChainId(CHAIN_NAME_TO_ID[ChainNameToTypeChainName[bridge.fromChain]]);
            setBridgeAddress(SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.fromChain]].bridge);
        }
    }, [bridge.fromChain]);

    useEffect(() => {
        if(bridge.fromToken){
            setTokenName(bridge.fromToken as TTokenName);
        }
    }, [bridge.fromToken]);

    useEffect(() => {
        if(bridge.decimals){
            setDecimals(bridge.decimals ? BigInt(bridge.decimals) : 18n);
            setFormattedAmount(BigInt(Number(bridge.amount) * 10 ** Number(decimals.toString())) || 1n);
        }
    }, [bridge.decimals]);

    useEffect(() => {
        if(bridge.toChain){
            setDestinationDomain(ChainToDestinationDomain[ChainNameToTypeChainName[bridge.toChain]]);
        }
    }, [bridge.toChain]);

    useEffect(() => {
        if(bridge.receiver)
        setMintRecipient(addressToBytes32(addressToAccount(bridge.receiver)));
    }, [bridge.receiver]);

    useEffect(() => {

        if(bridge.amount){
            setFormattedAmount(BigInt(Number(bridge.amount) * 10 ** Number(decimals.toString())) || 1n);
        }

    }, [bridge.amount])

    // @ts-ignore
    const { config } = usePrepareContractWrite({
        address: addressToAccount(bridgeAddress),
        account: address,
        abi: circleBurner,
        functionName: 'depositForBurn',
        args: [
            formattedAmount,
            destinationDomain,
            mintRecipient,
            tokenName
        ],
        chainId,
        value: BigInt(fee),
        onError(err: { message: string | undefined; }) {
            dispatch(setBridgeError(err.message));
        },
        onSuccess(){
            dispatch(setBridgeError(""));
        }
    });

    // Only relevant to the TX on the departure chain
    const { data, isLoading, isSuccess, write } = useContractWrite(config);

    useEffect(() => {
        if (data) {
            console.log("useBridgeTransfer:data:", data);
            dispatch(showBridgeProgress());
            if(isSuccess){
                dispatch(setBridgeIsLoading(false));
                dispatch(setBridgeIsSuccess(true));
                dispatch(setBridgeIsFailure(false));
            } else if(isLoading){
                dispatch(setBridgeIsLoading(true));
                dispatch(setBridgeIsSuccess(false));
                dispatch(setBridgeIsFailure(false));
            }else{
                dispatch(setBridgeIsLoading(false));
                dispatch(setBridgeIsSuccess(false));
                dispatch(setBridgeIsFailure(true));
            }
        }
    }, [data]);
    

    return { transferData: data, istransferLoading: isLoading, istransferSuccess: isSuccess, transfer: write };

}
