import { useEffect, useState } from 'react';
import { Hash } from 'viem';
import { erc20ABI } from 'wagmi';
import { useAppSelector, useAppDispatch } from './storage';
import { getProvider, getTokenAddress, addressToAccount } from '../utils';
import { TChainName, TTokenName } from '../types';
import {setBridgeAllowance, setBridgeDecimals, setBridgeError} from '../store/bridgeSlice';

export default function useBridgeAllowance(
    chainName: TChainName,
    tokenName: TTokenName,
    ownerAddress: string,
    spenderAddress: string,
) {

    const dispatch = useAppDispatch();
    const bridge = useAppSelector((state) => state.bridge);
    const provider = getProvider(chainName);
    const tokenAddress: Hash = addressToAccount(getTokenAddress(chainName, tokenName));

    const [allowance, setAllowance] = useState<string|number|bigint>(0);
    const [decimals, setDecimals] = useState<number>(18);
    const [error, setError] = useState<string|undefined>(undefined);
    const [isApprovalRequired, setIsApprovalRequired] = useState<boolean>(false);

    useEffect(() => {

        if(bridge.amount){

            (async () => {

                const decimals = await provider.readContract({
                    address: tokenAddress,
                    abi: erc20ABI,
                    functionName: 'decimals'
                });

                setDecimals(decimals);
                dispatch(setBridgeDecimals(decimals));

                const allowance = await provider.readContract({
                    address: tokenAddress,
                    abi: erc20ABI,
                    functionName: 'allowance',
                    args: [
                        addressToAccount(ownerAddress),
                        addressToAccount(spenderAddress)
                    ]
                });

                setAllowance(Number(allowance.toString()));
                dispatch(setBridgeAllowance(Number(allowance.toString())));

                if(BigInt(bridge.amount) > allowance){
                    setIsApprovalRequired(true);
                }else{
                    setIsApprovalRequired(false);
                }

                if(error) setError(undefined);
                if(bridge.error){
                    dispatch(setBridgeError(undefined));
                }

            })().catch(e => {
                const formattedError = `useBridgeAllowance Error: ${e}`;
                setError(formattedError);
                dispatch(setBridgeError(formattedError));
            });

        }

    }, [bridge.amount, bridge.fromChain, bridge.fromToken]);

    return {allowance, decimals, error, isApprovalRequired};
}