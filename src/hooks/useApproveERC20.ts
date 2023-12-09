import { erc20ABI, useEnsAddress, useContractWrite, usePrepareContractWrite, useAccount} from 'wagmi';

export type TAddress = `0x${string}`;

export function addressToAccount(address: string): TAddress {
    return `0x${address.replace('0x', '')}`;
}

export default function useApproveERC20(tokenAddress: string, spenderAddress: string, amount: bigint, chainId: number) {

    const { address } = useAccount();

    const { config } = usePrepareContractWrite({
        address: addressToAccount(tokenAddress),
        account: address,
        abi: erc20ABI,
        functionName: 'approve',
        args: [addressToAccount(spenderAddress), amount],
        chainId
    });

    const { data, isLoading, isSuccess, write } = useContractWrite(config);

    return { data, isLoading, isSuccess, write };

}