import { useEffect, useState } from 'react';
import { Hash } from 'viem';
import { useAccount } from 'wagmi';
import { circleBurner } from '../abis/circleBurner';
import getSigner from '../utils/getSigner';
import { useAppDispatch, useAppSelector } from './storage';
import { setBridgeFromHash, showBridgeProgress } from '../store/bridgeSlice';
import { TChainName, ChainNameToTypeChainName, SUPPORTED_CHAINS, ChainToDestinationDomain } from '../types';
import { addressToBytes32, addressToAccount } from '../utils';

import useBridgFee from './useBridgeFee';

export default function useBridgeTransferEmmet() {

    const { fee } = useBridgFee();

    const { address } = useAccount();

    const dispatch = useAppDispatch();

    const bridge = useAppSelector((state) => state.bridge);

    const [isBurnReady, setIsReady] = useState(false);

    const [params, setParams] = useState<any>(null);

    const try_ = async (): Promise<any> => {
        try {
            const chainName: TChainName = ChainNameToTypeChainName[bridge.fromChain];
            const decimals = bridge.decimals ? bridge.decimals : 18;
            const formattedAmount = Number(bridge.amount) * 10 ** decimals;
            const bridgeAddress: string = SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.fromChain]].emmetBridge.address;
            const destinationDomain = ChainToDestinationDomain[ChainNameToTypeChainName[bridge.toChain]];
            const mintRecipient: Hash = addressToBytes32(addressToAccount(bridge.receiver));
            const signer = getSigner(chainName);
            const tokenName: string = bridge.fromToken;

            console.log(
                'chainName', chainName,
                'decimals', decimals,
                'formattedAmount', formattedAmount,
                'bridgeAddress', bridgeAddress,
                'destinationDomain', destinationDomain,
                'mintRecipient', mintRecipient,
                'tokenName', tokenName,
                'fee', fee + 1000000000
            )

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
                value: BigInt(fee + 1000000000),
            });

            console.log('request:', request)

            if (request) {
                setIsReady(true);
                setParams(request);
            }

        } catch (e: any) {
            setIsReady(false);
            console.warn(`useBridgeTransferEmmet Error: ${e.message}`);
        }
    }

    useEffect(() => {

        if (address
            && fee
            && bridge.amount && Number(bridge.amount) > 0
            && bridge.allowance
            && bridge.allowance >= Number(bridge.amount)
        ) {
            (async () => {
                await try_();

            })().catch((e: any) => {
                setIsReady(false);
                console.warn(`useBridgeTransferEmmet Error: ${e.message}`);
            });
        }

    }, [bridge.amount, address, bridge.allowance, fee]);

    const burnUSDC = () => {

        (async () => {

            try {

                const chainName: TChainName = ChainNameToTypeChainName[bridge.fromChain];
                const signer = getSigner(chainName);
                let hash;
                if(!params){
                    (async () => {
                        await try_();
                    })()
                }
                hash = await signer.writeContract(params);


                if (hash) {
                    dispatch(setBridgeFromHash(hash));
                    dispatch(showBridgeProgress());
                }

            } catch (e: any) {
                console.warn(`useBridgeTransferEmmet Error: ${e.message}`);
            }

        })().catch((e: any) => {
            console.warn(`useBridgeTransferEmmet Error: ${e.message}`);
        });

    }

    return { isBurnReady, burnUSDC }

}