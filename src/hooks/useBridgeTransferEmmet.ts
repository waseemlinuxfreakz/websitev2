import { useEffect, useState } from 'react';
import { Hash } from 'viem';
import { useAccount } from 'wagmi';
import { circleBurner } from '../abis/circleBurner';
import getSigner from '../utils/getSigner';
import { useAppDispatch, useAppSelector } from './storage';
import { setBridgeFromHash, showBridgeProgress } from '../store/bridgeSlice';
import { TChainName, ChainNameToTypeChainName, SUPPORTED_CHAINS, ChainToDestinationDomain } from '../types';
import { addressToBytes32, addressToAccount, sleep } from '../utils';

import useBridgFee from './useBridgeFee';

export default function useBridgeTransferEmmet() {

    const { fee } = useBridgFee();

    const { address } = useAccount();

    const dispatch = useAppDispatch();

    const bridge = useAppSelector((state) => state.bridge);

    const [isBurnReady, setIsReady] = useState(false);

    const [params, setParams] = useState<any>(null);

    const [estimation, setEstimation] = useState<number>(0);

    const [error, setError] = useState('');

    let interval: string | number | NodeJS.Timeout | undefined;

    const try_ = async (): Promise<any> => {
        try {
            const chainName: TChainName = ChainNameToTypeChainName[bridge.fromChain];
            const decimals = bridge.decimals ? bridge.decimals : 18;
            const formattedAmount = Number(bridge.amount) * 10 ** decimals;
            const bridgeAddress: string = SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.fromChain]].emmetBridge.address;
            const destinationDomain = ChainToDestinationDomain[ChainNameToTypeChainName[bridge.toChain]];
            console.log("destinationDomain:", destinationDomain, ChainToDestinationDomain[ChainNameToTypeChainName[bridge.toChain]], 'bridge.toChain', bridge.toChain)
            const mintRecipient: Hash = addressToBytes32(addressToAccount(bridge.receiver));
            const signer = getSigner(chainName);
            const tokenName: string = bridge.fromToken;

            const gas = await signer.estimateContractGas({
                address: addressToAccount(bridgeAddress),
                account: `0x${address?.replace('0x', '')}`,
                abi: circleBurner,
                functionName: 'depositForBurn',
                args: [
                    BigInt(Math.ceil(formattedAmount)),
                    destinationDomain,
                    mintRecipient,
                    tokenName
                ],
                value: BigInt(fee + 1_000_000_000),
            });

            if (gas && fee) {
                setEstimation((parseInt(gas.toString()) + parseInt(fee.toString()) + 1_000_000_000) / 1e18);
            }

            console.log(
                'chainName', chainName,
                'decimals', decimals,
                'formattedAmount', formattedAmount,
                'bridgeAddress', bridgeAddress,
                'destinationDomain', destinationDomain,
                'mintRecipient', mintRecipient,
                'tokenName', tokenName,
                'fee', fee + 1_000_000_000,
                'gas', gas
            );

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
                value: BigInt(fee + 1_000_000_000),
            });

            console.log('request:', request)

            if (request && request.args[1] == ChainToDestinationDomain[ChainNameToTypeChainName[bridge.toChain]]) {
                setIsReady(true);
                setParams(request);
                setError('');
            }

        } catch (e: any) {
            setIsReady(false);
            console.warn(`useBridgeTransferEmmet Error: ${e.message}`);
            if(e.message.includes('Insufficient fee coverage.')){
                setError('Insufficient fee coverage.')
            }
        }
    }

    function retry() {



        console.log('retrying')

        if (address
            && fee
            && bridge.amount && Number(bridge.amount) > 0
            && bridge.allowance
            && bridge.allowance >= Number(bridge.amount)
        ) {
            (async () => {

                setError('');
                await try_();

            })().catch((e: any) => {
                setIsReady(false);
                console.warn(`useBridgeTransferEmmet Error: ${e.message}`);
            });
        }

    }

    useEffect(() => {

        if( bridge.amount && params && params.args[1] != ChainToDestinationDomain[ChainNameToTypeChainName[bridge.toChain]]){

            setIsReady(false);
            interval = setInterval(() => {
                retry();
            }, 5_000)
    
            return () => clearInterval(interval);

        }        

    }, [bridge.amount, address, bridge.allowance, fee, bridge.toChain]);

    const burnUSDC = () => {

        (async () => {

            try {

                const chainName: TChainName = ChainNameToTypeChainName[bridge.fromChain];
                const signer = getSigner(chainName);
                let hash;
                if (!params) {
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

    return { estimation, isBurnReady, burnUSDC, retry, error }

}