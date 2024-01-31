import { TOKEN_CHAIN_CONTRACT, TChainName, TTokenName } from "../types";

export function getTokenAddress(chainName: TChainName, tokenName: TTokenName): string {
    return TOKEN_CHAIN_CONTRACT[tokenName][chainName];
}