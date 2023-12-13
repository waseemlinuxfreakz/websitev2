import { createPublicClient, http } from 'viem';
import { TChainName, options } from '../types';
import { findChain, getChainData } from './chain';

export function getProvider(chainName: TChainName) {

    const chain = findChain(chainName);

    const rpcURL: string = getChainData(chainName, "url") as string;

    const provider = createPublicClient({
        chain,
        transport: http(rpcURL, (options))
    });

    return provider;

}