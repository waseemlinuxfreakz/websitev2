import { useEffect, useState } from 'react';
import { erc20ABI, useAccount } from 'wagmi';
import { useAppSelector, useAppDispatch } from './storage';
import { getProvider, getTokenAddress, addressToAccount } from '../utils';
import { ChainNameToTypeChainName, SUPPORTED_CHAINS, TChainName, TTokenName } from '../types';
import { setBridgeAllowance, setBridgeDecimals, setBridgeError } from '../store/bridgeSlice';

export default function useBridgeAllowance() {

    const { address, isConnected } = useAccount();

    const dispatch = useAppDispatch();

    const bridge = useAppSelector((state) => state.bridge);

    function isApproveRequired() {
        return Number(bridge.amount) > (Number(bridge.allowance) / 10 ** Number(bridge.decimals));
    }

    const [allowance, setAllowance] = useState<string | number>(bridge.allowance);

    const [decimals, setDecimals] = useState<bigint>(bridge.decimals ? BigInt(bridge.decimals) : 18n);

    const [error, setError] = useState<string | undefined>(undefined);

    const [isApprovalRequired, setIsApprovalRequired] = useState<boolean>(false);


    useEffect(() => {

        (async () => {

            if(isConnected && bridge.fromChain && bridge.fromToken){

                const tokenAddress = addressToAccount(getTokenAddress(
                    ChainNameToTypeChainName[bridge.fromChain],
                    bridge.fromToken as TTokenName
                ));
                const chainName: TChainName = ChainNameToTypeChainName[bridge.fromChain];
                const chain = SUPPORTED_CHAINS[chainName];
                const spender:string = chain!.emmetBridge.address;
                const provider = getProvider(chainName);
    
                if (tokenAddress) {
    
                    const decimals = await provider.readContract({
                        address: tokenAddress,
                        abi: erc20ABI,
                        functionName: 'decimals'
                    });
    
                    setDecimals(BigInt(decimals));
                    dispatch(setBridgeDecimals(decimals));
    
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

            }

        })().catch(e => {
            const formattedError = `useBridgeAllowance Error: ${e}`;
            console.error(formattedError)
            setError(formattedError);
            dispatch(setBridgeError(formattedError));
            // console.log("tokenAddress", tokenAddress, "spender", spender)
        });

    }, [address, bridge.amount, bridge.fromChain, bridge.fromToken, bridge.isApproving]);

    return { allowance, decimals, error, isApprovalRequired };
}