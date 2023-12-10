// Mock Data
import chainList from '../store/Chain.json';
import coinsData from '../store/coins.json';
import { TChainType, TokenType } from '../store/types';

export function filterTwoChains(chain1: string, chain2: string): TChainType[] {
    return chainList.filter((chain: TChainType) => chain.name != chain1 && chain.name != chain2);
}

export function filterTwoTokens(name1: string, name2: string): TokenType[] {
    return coinsData.filter((token: TokenType) => token.name != name1 && token.name != name2);
}