import {arbitrumSepolia as viemArbitrumSepolia } from 'viem/chains'
import { TEmmetChain } from '.';

export const arbitrumSepolia = {
  ...viemArbitrumSepolia,
  emmetBridge: {
    address: "0x2B35ff1C77022371D636685ABB3847F4e990efaf",
    blockCreated: 10246143
  },
  emmetFeeOracle: {
    address: "0xD62cF1Fe287361c042eB71b7121e3AFCC03D2A95",
    blockCreated: 10588923
  },
  name: "Arbitrum Sepolia",
  rpcUrls: {
    default: {
      http: ['https://sepolia-rollup.arbitrum.io/rpc'],
    },
    public: {
      http: ['https://sepolia-rollup.arbitrum.io/rpc'],
    },
  },
  testnet: true,
} as TEmmetChain;