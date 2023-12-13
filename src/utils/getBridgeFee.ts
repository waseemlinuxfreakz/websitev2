import { TChainName, ChainToBridge } from '../types';
import { getContract } from './getContract';
import { circleBurner } from '../abis/circleBurner';
import { getProvider } from './getProvider';

export default async function getFee(
    chainName: TChainName,
) {

    const contract = getContract(
        ChainToBridge[chainName],
        circleBurner,
        getProvider(chainName)
        );

    // @ts-ignore
    const fee = await contract.read.feeRate();

    return fee;

}