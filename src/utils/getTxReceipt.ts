import { TransactionReceipt } from "viem";
import { TChainName } from "../types";
import { getProvider } from "./getProvider";
import { sleep } from "./time";

export async function getTxReceipt(
  hash: string,
  chainName: TChainName,
): Promise<TransactionReceipt> {
  try {
    const provider = getProvider(chainName);

    const TX: TransactionReceipt = await provider.getTransactionReceipt({
      hash: `0x${hash.replace("0x", "")}`,
    });

    return TX;
  } catch (error) {
    await sleep(3000);

    return getTxReceipt(hash, chainName);
  }
}
