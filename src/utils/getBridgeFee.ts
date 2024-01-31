import { TChainName} from '../types';
import { getContract } from './getContract';
import { circleBurner } from '../abis/circleBurner';
import { getProvider } from './getProvider';
import { SUPPORTED_CHAINS } from '../types';

export default async function getFee(
    chainName: TChainName,
) {

    const contract = getContract(
        SUPPORTED_CHAINS[chainName as TChainName].emmetBridge.address,
        circleBurner,
        getProvider(chainName)
        );

    // @ts-ignore
    const fee = await contract.read.feeRate();

    return fee;

}