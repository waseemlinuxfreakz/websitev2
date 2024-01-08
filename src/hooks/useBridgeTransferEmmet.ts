import React, { useEffect, useState } from 'react';
import { Hash } from 'viem';
import { useAccount, useWalletClient } from 'wagmi';
import { circleBurner } from '../abis/circleBurner';
import getSigner from '../utils/getSigner';
import { useAppDispatch, useAppSelector } from './storage';
import { setBridgeError, setBridgeAllowance, setBridgeIsApproving, setBridgeFromHash, showBridgeProgress } from '../store/bridgeSlice';
import { TChainName, TTokenName, ChainNameToTypeChainName, CHAIN_NAME_TO_ID, SUPPORTED_CHAINS, ChainToDestinationDomain } from '../types';
import { addressToBytes32, addressToAccount } from '../utils';

import useBridgFee from './useBridgeFee';

export default function useBridgeTransferEmmet() {

    const { fee } = useBridgFee();

    const { address } = useAccount();

    const dispatch = useAppDispatch();

    const bridge = useAppSelector((state) => state.bridge);

    const [isBurnReady, setIsReady] = useState(false);

    const [params, setParams] = useState<any>(null);

    useEffect(() => {

        if (address && bridge.amount && bridge.allowance && bridge.allowance >= Number(bridge.amount)) {
            (async () => {
                try {
                    const chainName: TChainName = ChainNameToTypeChainName[bridge.fromChain];
                    const decimals =  bridge.decimals ? bridge.decimals : 18;
                    const formattedAmount = Number(bridge.amount) * 10 ** decimals;
                    const bridgeAddress: string = SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.fromChain]].bridge;
                    const destinationDomain = ChainToDestinationDomain[ChainNameToTypeChainName[bridge.toChain]];
                    const mintRecipient: Hash = addressToBytes32(addressToAccount(bridge.receiver));
                    const signer = getSigner(chainName);
                    const tokenName: string = bridge.fromToken;

                    const { request } = await signer.simulateContract({
                        address: addressToAccount(bridgeAddress),
                        account: address,
                        abi: circleBurner,
                        functionName: 'depositForBurn',
                        args: [
                            BigInt(Math.ceil(formattedAmount)),
                            destinationDomain,
                            mintRecipient,
                            tokenName
                        ],
                        value: BigInt(fee),
                    });

                    if (request) {
                        setIsReady(true);
                        setParams(request);
                    }

                    console.log("request", request);

                } catch (e: any) {
                    setIsReady(false);
                    console.warn(`useBridgeTransferEmmet Error: ${e.message}`);
                }

            })().catch((e: any) => {
                setIsReady(false);
                console.warn(`useBridgeTransferEmmet Error: ${e.message}`);
            });
        }

    }, [bridge.amount, address, bridge.allowance]);

    const burnUSDC = () => {
        (async () => {
            try {

                const chainName: TChainName = ChainNameToTypeChainName[bridge.fromChain];
                const signer = getSigner(chainName);
                const hash = await signer.writeContract(params);

                if (hash) {
                    dispatch(setBridgeFromHash(hash));
                    dispatch(showBridgeProgress());
                    console.log("useBridgeTransferEmmet hash:", hash);
                }

            } catch (e:any) {
                console.warn(`useBridgeTransferEmmet Error: ${e.message}`);
            }

        })().catch((e: any) => {
            console.warn(`useBridgeTransferEmmet Error: ${e.message}`);
        });

    }

    return { isBurnReady, burnUSDC }

}