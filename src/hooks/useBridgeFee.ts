import { getProvider, addressToAccount } from '../utils';
import { ChainNameToTypeChainName, SUPPORTED_CHAINS, TChainName } from '../types';
import { useAppDispatch, useAppSelector } from './storage';
import { useState, useEffect } from 'react';
import { EmmetFeeOracleABI } from '../abis/EmmetFeeOracle';
import { setBridgeError, setBridgeFee } from '../store/bridgeSlice';
import { EmmetChain } from '../constants/chains/chainTypes';

export default function useBridgFee () {

    const dispatch = useAppDispatch();

    const bridge = useAppSelector((state) => state.bridge);

    const [fee, setFee] = useState<number>(bridge.bridgeFee ? bridge.bridgeFee : 0);

    const [formattedFee, setFormattedfee ] = useState<number>();

    const [bridgeAddress, setBridgeAddress] = useState<string>(SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.fromChain]].emmetFeeOracle.address);

    const [nativeCurrency, setNativeCurrency] = useState<string>(SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.fromChain]].nativeCurrency.symbol)

    const [provider, setProvider] = useState(getProvider(ChainNameToTypeChainName[bridge.fromChain]));

    function formatFee(fee:number):number{
        const decimals = SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.fromChain]].nativeCurrency.decimals;
        return fee / 10 ** Number(decimals);
    }

    async function getBridgeFee() {
        return await provider.readContract({
            address: addressToAccount(SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.fromChain]].emmetFeeOracle.address),
            abi: EmmetFeeOracleABI,
            functionName:'calculateTransactionFee',
            args:[ChainNameToTypeChainName[bridge.toChain]]
        });
    }

    useEffect(() => {
        if(bridge.fromChain){

            const chain = SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.fromChain]];
            const chainName: TChainName = ChainNameToTypeChainName[bridge.fromChain];

            setBridgeAddress(chain.emmetFeeOracle.address);
            setProvider(getProvider(chainName));
            setNativeCurrency(chain.nativeCurrency.symbol)
        }
    }, [bridge.fromChain, bridge.allowance]);

    useEffect(() => {

        if(bridgeAddress && provider){

            (async () => {
                const fee_ = await getBridgeFee();
                if(fee_){
                    console.log("fee_", fee_, "contract:", bridgeAddress)
                    const _fee = Number(fee_.toString());
                    setFormattedfee(formatFee(_fee));
                    setFee(_fee);
                    dispatch(setBridgeFee(_fee));
                }
                
            })().catch(e => {
                const err = `useBridgFee Error: ${e.message}`;
                dispatch(setBridgeError(err));
                console.log(err);
            })

        }

    }, [bridgeAddress, bridge.amount])

    // console.log('fee', fee, 'nativeCurrency', nativeCurrency, 'formattedFee', formattedFee, 'bridgeAddress', bridgeAddress, 'toChain:', ChainNameToTypeChainName[bridge.toChain])
    return { fee, nativeCurrency, formattedFee }

}