export * from './addresses';
export * from './chains';
export * from './errors';
export * from './tokens';

export enum IrisApiUrl {
    mainnet = 'https://iris-api.circle.com',
    testnet = 'https://iris-api-sandbox.circle.com'
}

export const DEFAULT_BLOCKCHAIN_DELAY = 1000 // polling every second
export const DEFAULT_API_DELAY = 5000 // polling every 5 second
export const TX_HASH_KEY = 'txHash';