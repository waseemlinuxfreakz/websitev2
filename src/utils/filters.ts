// Mock Data
import chainList from '../store/Chain.json';
import coinsData from '../store/coins.json';
import { BridgeTokens } from '../types/tokens'
import { TChainType, TokenType } from '../store/types';

/**
 * Used by the bridge to disable sending inside the same chain
 * @param chain1 from chain name
 * @param chain2 to chain name
 * @returns an array of yet unselected chain names
 */
export function filterTwoChains(chain1: string, chain2: string): TChainType[] {
    return chainList.filter((chain: TChainType) => chain.name != chain1 && chain.name != chain2);
}

/**
 * Used in Swap, filteres out already selected tokens
 * @param name1 from token symbol
 * @param name2 to token symbol
 * @returns an array of yet unsellected tokens
 */
export function filterTwoTokens(name1: string, name2: string): TokenType[] {
    return coinsData.filter((token: TokenType) => token.name != name1 && token.name != name2);
}

/**
 * Used in the Bridge only
 * @param name name of the selected token
 * @returns an array of yet unselected tokens
 */
export function filterOneToken(name:string) : TokenType[] {
    return BridgeTokens.filter((token:TokenType) => token.name != name);
}

/**
 * Finds a chain object by a chain's name
 * @param name the name of
 * @returns the chain object if found | undefined otherwise
 */
export function getChainidByName(name:string): number {
    const foundChain:TChainType|undefined = chainList.find((chain:TChainType) => chain.name === name);
    if(foundChain){
        return foundChain.id;
    }
    return 0;
}