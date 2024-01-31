import {optimism as viemOptimism} from 'viem/chains';
import { TEmmetChain } from '.';

const sourceId = 1 // Ethereum

export const optimism = {
  ...viemOptimism,
  emmetBridge: {
    address: "",
    blockCreated: 0
  },
  emmetFeeOracle:{
    address:"",
    blockCreated: 0
  },
  name: 'Optimism',
  rpcUrls: {
    default: {
      http: ['https://mainnet.optimism.io'],
    },
    public: {
      http: ['https://mainnet.optimism.io'],
    },
  },
} as TEmmetChain;