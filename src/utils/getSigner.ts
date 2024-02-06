
import { TChainName } from '../types';
import { findChain } from './chain';
import { createWalletClient, custom, publicActions  } from 'viem';

export default function getSigner(chainName: TChainName){

    let transport;

    if((window as any).ethereum){
        transport = custom((window as any).ethereum);
    }else{
        throw new Error("No wallet available");
    }

    const chain = findChain(chainName);

    const signer = createWalletClient({
        chain,
        transport
    })
    .extend(publicActions);

    return signer;

}