import { addressToAccount, getProvider, getTokenAddress, sleep } from '../utils';
import { TChainName, TTokenName, ChainNameToTypeChainName, CHAIN_NAME_TO_ID, SUPPORTED_CHAINS } from '../types';
import {
    erc20ABI,
    useContractWrite,
    usePrepareContractWrite,
    useAccount,
} from 'wagmi';
import { Hash, TransactionReceipt } from 'viem';
import { setBridgeError, setBridgeAllowance, setBridgeIsApproving } from '../store/bridgeSlice';
import { useAppDispatch, useAppSelector } from './storage';
import { useEffect, useState } from 'react';

async function getTxReceipt(hash: string, chainName: TChainName): Promise<TransactionReceipt> {

    try {

        const provider = getProvider(chainName);
        const TX: TransactionReceipt = await provider.getTransactionReceipt({ hash: `0x${hash.replace('0x', '')}` });

        return TX;

    } catch (error) {
        await sleep(3000);
        return getTxReceipt(hash, chainName);
    }

}


export default function useBridgeApproveERC20() {

    const { address } = useAccount();

    const dispatch = useAppDispatch();

    const bridge = useAppSelector((state) => state.bridge);

    const [tokenName, setTokenName] = useState<TTokenName>(bridge.fromToken as TTokenName);

    const [chainName, setChainName] = useState<TChainName>(ChainNameToTypeChainName[bridge.fromChain]);

    const [chainId, setChainId] = useState<number>(CHAIN_NAME_TO_ID[ChainNameToTypeChainName[ChainNameToTypeChainName[bridge.fromChain]]]);

    const [tokenAddress, setTokenAddress] = useState<Hash>(addressToAccount(getTokenAddress(ChainNameToTypeChainName[bridge.fromChain], tokenName)));

    const [decimals, setDecimals] = useState<number>(bridge.decimals ? Number(bridge.decimals.toString()) : 18);

    const [formattedAmount, setFormattedAmount] = useState<number>(Number(bridge.amount) * 10 ** Number(decimals.toString()));

    const [spender, setSpender] = useState<string>(SUPPORTED_CHAINS[chainName].bridge);

    useEffect(() => {
        setFormattedAmount(Number(bridge.amount) * 10 ** decimals)
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
        setDecimals(bridge.decimals ? bridge.decimals : 18)
        setFormattedAmount(Number(bridge.amount) * 10 ** decimals)
    }, [bridge.decimals]);

    const { config } = usePrepareContractWrite({
        address: addressToAccount(tokenAddress),
        account: address,
        abi: erc20ABI,
        functionName: 'approve',
        args: [addressToAccount(spender), BigInt(Math.ceil(formattedAmount))],
        chainId,
        onError(err: { message: string | undefined; }) {
            dispatch(setBridgeError(err.message));
            dispatch(setBridgeIsApproving(false));
        },
        onSettled() {
            dispatch(setBridgeError(""));
        }
    });

    const { data, isLoading, isSuccess, write } = useContractWrite(config);

    if (data && isSuccess ) {
        (async () => {
            const TX = await getTxReceipt(data.hash, chainName);

            if (TX && TX.status === 'success') {
                await sleep(20_000);
                dispatch(setBridgeAllowance(Number(bridge.amount) * 10 ** decimals));
                dispatch(setBridgeIsApproving(false));
            }

        })();

    }

    return { approveData: data, isApproveLoading: isLoading, isApproveSuccess: isSuccess, approve: write };

}