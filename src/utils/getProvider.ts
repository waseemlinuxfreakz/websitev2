import { createPublicClient, http, fallback } from 'viem';
import { TChainName, TEmmetChain, options } from '../types';
import { findChain, getChainData } from './chain';

export function getProvider(chainName: TChainName) {

    const chain: TEmmetChain = findChain(chainName) as TEmmetChain;

    const rpcURL: string = getChainData(chainName, "url") as string;

    const provider = createPublicClient({
        chain,
        transport: fallback(chain?.rpcUrls.public.http.map(RPC => {
            return http(RPC);
        }))

    });

    return provider;

}