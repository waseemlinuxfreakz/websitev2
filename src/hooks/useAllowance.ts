import { useEffect, useState } from 'react';
import { Hash } from 'viem';
import { erc20ABI, useAccount } from 'wagmi';
import { useAppSelector, useAppDispatch } from './storage';
import { getProvider, getTokenAddress, addressToAccount } from '../utils';
import { ChainNameToTypeChainName, SUPPORTED_CHAINS, TChainName, TTokenName } from '../types';
import { setBridgeAllowance, setBridgeDecimals, setBridgeError } from '../store/bridgeSlice';

export default function useBridgeAllowance() {


    const { address } = useAccount();

    const dispatch = useAppDispatch();

    const bridge = useAppSelector((state) => state.bridge);

    function isApproveRequired() {
        return Number(bridge.amount) > (Number(bridge.allowance) / 10 ** Number(bridge.decimals));
    }

    const [allowance, setAllowance] = useState<string | number | bigint>(BigInt(bridge.allowance));

    const [tokenName, setTokenName] = useState<TTokenName>(bridge.fromToken as TTokenName);

    const [chainName, setChainName] = useState<TChainName>(ChainNameToTypeChainName[bridge.fromChain]);

    const [spender, setSpender] = useState<string>(SUPPORTED_CHAINS[chainName].bridge);

    const [tokenAddress, setTokenAddress] = useState<Hash>(addressToAccount(getTokenAddress(chainName, tokenName)));

    const [decimals, setDecimals] = useState<bigint>(bridge.decimals ? BigInt(bridge.decimals) : 18n);

    const [error, setError] = useState<string | undefined>(undefined);

    const [isApprovalRequired, setIsApprovalRequired] = useState<boolean>(false);

    const [provider, setProvider] = useState(getProvider(chainName));


    useEffect(() => {
        if (bridge.fromChain) {
            setChainName(ChainNameToTypeChainName[bridge.fromChain]);
            setSpender(SUPPORTED_CHAINS[chainName].bridge);
            if (tokenName) {
                setTokenAddress(addressToAccount(getTokenAddress(ChainNameToTypeChainName[bridge.fromChain], tokenName)));
            }
            setProvider(getProvider(chainName));
        }
    }, [bridge.fromChain]);

    useEffect(() => {
        if (bridge.fromToken) {
            setTokenName(bridge.fromToken as TTokenName);
            setTokenAddress(addressToAccount(getTokenAddress(chainName, tokenName)));
        }
    }, [bridge.fromToken]);

    useEffect(() => {

        (async () => {

            if(tokenAddress && spender && address){

                console.log("tokenAddress", tokenAddress)

                const decimals = await provider.readContract({
                    address: tokenAddress,
                    abi: erc20ABI,
                    functionName: 'decimals'
                });
    
                setDecimals(BigInt(decimals));
                dispatch(setBridgeDecimals(decimals));
    
                console.log("tokenAddress", tokenAddress, "spender", spender)
    
                const allowance = await provider.readContract({
                    address: tokenAddress,
                    abi: erc20ABI,
                    functionName: 'allowance',
                    args: [
                        addressToAccount(address!),
                        addressToAccount(spender)
                    ]
                });
    
                setAllowance(Number(allowance.toString()));
                dispatch(setBridgeAllowance(Number(allowance.toString())));
            }

            if (isApproveRequired()) {
                setIsApprovalRequired(true);
            } else {
                setIsApprovalRequired(false);
            }

            if (error) setError(undefined);
            if (bridge.error) {
                dispatch(setBridgeError(undefined));
            }


        })().catch(e => {
            const formattedError = `useBridgeAllowance Error: ${e}`;
            console.error(formattedError)
            setError(formattedError);
            dispatch(setBridgeError(formattedError));
            // console.log("tokenAddress", tokenAddress, "spender", spender)
        });

    }, [address, bridge.amount, bridge.fromChain, bridge.fromToken]);

    return { allowance, decimals, error, isApprovalRequired };
}