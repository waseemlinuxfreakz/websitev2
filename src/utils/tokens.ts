import { SUPPORTED_TOKENS, TChainName, TTokenName } from "../types";

export function getTokenAddress(chainName: TChainName, tokenName: TTokenName): string {
    return SUPPORTED_TOKENS[tokenName][chainName];
}