import { TOKEN_CHAIN_CONTRACT, TChainName, TTokenName } from "../types";

/**
 * Fetches the token address
 * @param chainName chain name where the contract is deployed
 * @param tokenName the token name
 * @returns the token address on the chain
 */
export function getTokenAddress(
  chainName: TChainName,
  tokenName: TTokenName,
): string {
  // @ts-ignore
  return TOKEN_CHAIN_CONTRACT[tokenName][chainName];
}

/**
 * Verifies whether the `data` is a supported token name
 * @param data potential token name
 * @returns true | false
 */
export function isTokenName(data: string): boolean {
  return Object.keys(TOKEN_CHAIN_CONTRACT).indexOf(data) > -1;
}
