import {arbitrumSepolia as viemArbitrumSepolia } from 'viem/chains'
import { TEmmetChain } from '.';

export const arbitrumSepolia = {
  ...viemArbitrumSepolia,
  emmetBridge: {
    address: "0x2B35ff1C77022371D636685ABB3847F4e990efaf",
    blockCreated: 10246143
  },
  emmetFeeOracle: {
    address: "0x324852FBfC3759ad6bf52fD3e32B12e9E664a48C",
    blockCreated: 10588923
  },
  name: "Arbitrum Sepolia",
  rpcUrls: {
    default: {
      http: ['https://arbitrum-sepolia.blockpi.network/v1/rpc/public'],
    },
    public: {
      http: [
        'https://arbitrum-sepolia.blockpi.network/v1/rpc/public',
        'https://sepolia-rollup.arbitrum.io/rpc'
      ],
    },
  },
  testnet: true,
} as TEmmetChain;