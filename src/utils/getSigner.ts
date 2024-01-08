
import { TChainName } from '../types';
import { findChain } from './chain';
import { createWalletClient, custom, publicActions  } from 'viem';

export default function getSigner(chainName: TChainName){

    const chain = findChain(chainName);

    const signer = createWalletClient({
        chain,
        transport: custom((window as any).ethereum)
    })
    .extend(publicActions);

    return signer;

}