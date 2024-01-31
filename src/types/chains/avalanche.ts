import {avalanche as viemAvalanche} from 'viem/chains';
import { TEmmetChain } from '.';

export const avalanche = {
  ...viemAvalanche,
  emmetBridge: {
    address: "",
    blockCreated: 0
  },
  emmetFeeOracle:{
    address:"",
    blockCreated: 0
  },
  name: "Avalanche",
  rpcUrls: {
    default: { http: ['https://api.avax.network/ext/bc/C/rpc'] },
    public: { http: ['https://api.avax.network/ext/bc/C/rpc'] },
  },
  testnet: false,
} as TEmmetChain;