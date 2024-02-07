import { Hash, TransactionReceipt } from "viem";
import { TChainName, TTokenName, TTxStatus } from "../types";
import { getSigner } from "./getSigner";
import { circleBurner } from '../abis/circleBurner';
import { addressToAccount, addressToBytes32 } from "./address";
import { sleep } from "./time";
import { getTxReceipt } from "./getTxReceipt";

/**
 * Submits a token for burning & transferring on another chain
 * @param chainName the name of a supported chain where burning happens
 * @param bridgeAddress the address of the Emmet.Finance CircleBurner contract
 * @param amount the number of wei a user wants to transfer
 * @param destinationDomain an internal Circle chain domain, currently in {0, 7}
 * @param mintRecipient the address of the beneficiary on the destination chain
 * @param tokenName the symbol of the transferred token, e.g. USDC
 * @param fee the compensation of the TX fee on the destination
 * @returns Struct {hash: Hash | undefined, status: 'success' | 'reverted' | 'failed', error: string | undefined}
 */
export async function BurnToTransfer(
    chainName: TChainName,
    bridgeAddress: Hash,
    amount: bigint,
    destinationDomain: number,
    mintRecipient: Hash,
    tokenName: TTokenName,
    fee: number
): Promise<{ hash: Hash | undefined, status: TTxStatus, error: string | undefined }> {

    try {

        const signer = getSigner(chainName);

        const [address] = await signer.requestAddresses();

        // Submit the transaction
        const hash: Hash | undefined = await signer.writeContract({
            address: addressToAccount(bridgeAddress),
            abi: circleBurner,
            functionName: 'depositForBurn',
            args: [
                amount,
                destinationDomain,
                addressToBytes32(addressToAccount(mintRecipient)),
                tokenName
            ],
            account: `0x${address?.replace('0x', '')}`,
            value: BigInt(fee + 1_000_000_000),
        });

        // Await 4 blocks for the TX to finalize
        await sleep(24_000);

        if (hash) {

            // Check whether the TX got finalized
            const receipt: TransactionReceipt = await getTxReceipt(hash, chainName);

            // Extract its status
            const status: TTxStatus = receipt && receipt.status ? receipt.status : 'failed';

            return { hash, status, error: undefined };

        }

        return { hash: undefined, status: 'failed', error: 'Something went wrong...' };

    } catch (error: { message: string } | any) {

        return { hash: undefined, status: 'failed', error: error.message };

    }

}