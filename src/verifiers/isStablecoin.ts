
import { STABLECOINS } from '../types';

export function isStableCoin(coin: string): boolean {
    return STABLECOINS.includes(coin);
}