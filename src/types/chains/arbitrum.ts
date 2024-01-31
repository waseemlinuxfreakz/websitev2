import {arbitrum as viemArbitrum } from 'viem/chains'
import { TEmmetChain } from '.';

export const arbitrum = {
  ...viemArbitrum,
  emmetBridge: {
    address: "",
    blockCreated: 0
  },
  emmetFeeOracle:{
    address:"",
    blockCreated: 0
  },
  name: "Arbitrum",
  rpcUrls: {
    default: {
      http: ['https://arb1.arbitrum.io/rpc'],
    },
    public: {
      http: ['https://arb1.arbitrum.io/rpc'],
    },

  },
} as TEmmetChain;