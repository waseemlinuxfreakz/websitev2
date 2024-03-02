import {avalanche as viemAvalanche} from 'viem/chains';
import { TEmmetChain } from '.';

export const avalanche = {
  ...viemAvalanche,
  emmetBridge: {
    address: "0x858784325dB6B6D09a0bC6e198b9113861EB1ED5",
    blockCreated: 0
  },
  emmetFeeOracle:{
    address:"0x206959972584c8778f0C5bFA493EC753dB3c443A",
    blockCreated: 0
  },
  name: "Avalanche",
  rpcUrls: {
    default: { http: ['https://api.avax.network/ext/bc/C/rpc'] },
    public: { http: ['https://api.avax.network/ext/bc/C/rpc'] },
  },
  testnet: false,
} as TEmmetChain;