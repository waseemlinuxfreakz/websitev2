import { addressToAccount, getTokenAddress } from '../utils';
import { TChainName, TTokenName, ChainNameToTypeChainName, CHAIN_NAME_TO_ID, SUPPORTED_CHAINS } from '../types';
import {
    erc20ABI,
    useContractWrite,
    usePrepareContractWrite,
    useAccount,
} from 'wagmi';
import { Hash } from 'viem';
import { setBridgeError, setBridgeAllowance } from '../store/bridgeSlice';
import { useAppDispatch, useAppSelector } from './storage';
import { useEffect, useState } from 'react';


export default function useBridgeApproveERC20() {

    const { address } = useAccount();

    const dispatch = useAppDispatch();

    const bridge = useAppSelector((state) => state.bridge);


    const [tokenName, setTokenName] = useState<TTokenName>(bridge.fromToken as TTokenName);

    const [chainName, setChainName] = useState<TChainName>(ChainNameToTypeChainName[bridge.fromChain]);

    const [chainId, setChainId] = useState<number>(CHAIN_NAME_TO_ID[ChainNameToTypeChainName[chainName]]);

    const [tokenAddress, setTokenAddress] = useState<Hash>(addressToAccount(getTokenAddress(chainName, tokenName)));

    const [decimals, setDecimals] = useState<bigint>(bridge.decimals ? BigInt(bridge.decimals) : 18n);

    const [formattedAmount, setFormattedAmount] = useState<bigint>(BigInt(Number(bridge.amount) * 10 ** Number(decimals.toString())));

    const [spender, setSpender] = useState<string>(SUPPORTED_CHAINS[chainName].bridge);



    useEffect(() => {
        setFormattedAmount(BigInt(Number(bridge.amount) * 10 ** Number(decimals.toString())))
        console.log(formattedAmount)
    }, [bridge.amount]);

    useEffect(() => {
        setTokenName(bridge.fromToken as TTokenName)
    }, [bridge.fromToken]);

    useEffect(() => {
        setChainName(ChainNameToTypeChainName[bridge.fromChain])
    }, [bridge.fromChain]);

    useEffect(() => {
        setChainId(CHAIN_NAME_TO_ID[ChainNameToTypeChainName[chainName]]);
        setSpender(SUPPORTED_CHAINS[chainName].bridge);
        setTokenAddress(addressToAccount(getTokenAddress(chainName, tokenName)))
    }, [chainName]);

    useEffect(() => {
        setTokenAddress(addressToAccount(getTokenAddress(chainName, tokenName)))
    }, [tokenName]);

    useEffect(() => {
        setDecimals(bridge.decimals ? BigInt(bridge.decimals) : 18n)
        setFormattedAmount(BigInt(Number(bridge.amount) * 10 ** Number(decimals.toString())))
    }, [bridge.decimals]);


    const { config } = usePrepareContractWrite({
        address: addressToAccount(tokenAddress),
        account: address,
        abi: erc20ABI,
        functionName: 'approve',
        args: [addressToAccount(spender), formattedAmount],
        chainId,
        onError(err) {
            dispatch(setBridgeError(err.message));
        }
    });

    const { data, isLoading, isSuccess, write } = useContractWrite(config);

    return { approveData: data, isApproveLoading: isLoading, isApproveSuccess: isSuccess, approve: write };

}