import { erc20Abi } from "viem";
import { addressToAccount } from "./address";
import { getSigner } from "./getSigner";
import { TChainName, TTxStatus } from "../types";
import { Hash, TransactionReceipt } from "viem";
import { sleep } from "./time";
import { getTxReceipt } from "./getTxReceipt";

/**
 * Approves the `amount` allowed for the `spender` in and ERC20 contract
 * @param chainName the name of a supported chain where Approval is made
 * @param tokenAddress the address of the ERC 20 token contract
 * @param spender the address of the EOA or contract
 * @param amount the number of wei
 * @returns Struct {hash: Hash | undefined, status: 'success' | 'reverted' | 'failed', error: string | undefined}
 */
export async function Approve(
  chainName: TChainName,
  tokenAddress: Hash,
  spender: string,
  amount: bigint
): Promise<{
  hash: Hash | undefined;
  status: TTxStatus;
  error: string | undefined;
}> {
  try {
    const signer = getSigner(chainName);

    const [address] = await signer.requestAddresses();

    // Submit the transaction
    const hash: Hash | undefined = await signer.writeContract({
      address: addressToAccount(tokenAddress),
      abi: erc20Abi,
      functionName: "approve",
      args: [addressToAccount(spender), amount],
      account: `0x${address?.replace("0x", "")}`,
    });

    // Await 4 blocks for the TX to finalize
    await sleep(24_000);

    if (hash) {
      // Check whether the TX got finalized
      const receipt: TransactionReceipt = await getTxReceipt(hash, chainName);

      // Extract its status
      const status: TTxStatus =
        receipt && receipt.status ? receipt.status : "failed";

      return { hash, status, error: undefined };
    }

    return {
      hash: undefined,
      status: "failed",
      error: "Something went wrong...",
    };
  } catch (error: { message: string } | any) {
    return { hash: undefined, status: "failed", error: error.message };
  }
}
