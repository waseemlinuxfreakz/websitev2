import {optimismSepolia as viemOptimismSepolia} from 'viem/chains';
import { TEmmetChain } from '.';

export const optimismSepolia = {
  ...viemOptimismSepolia,
  emmetBridge: {
    address: "0x0A6A1Beb7b0b3545578818f45f4e6219615d25aD",
    blockCreated: 7332935
  },
  emmetFeeOracle: {
    address: "0xcD67bFa984C7D7F0c9Ec5558A86587a80f0aE71c",
    blockCreated: 7398828
  },
  name: 'Optimism Sepolia',
  rpcUrls: {
    default: {
      http: ['https://sepolia.optimism.io'],
    },
    public: {
      http: ['https://sepolia.optimism.io'],
    },
  },
  testnet: true,
} as TEmmetChain;